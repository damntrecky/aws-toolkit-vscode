/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as vscode from 'vscode'
import * as path from 'path'
import * as os from 'os'
import * as CodeWhispererConstants from '../../models/constants'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { BuildSystem, FolderInfo, transformByQState } from '../../models/model'
import xml2js = require('xml2js')
import { IManifestFile } from '../../../amazonqFeatureDev/models'

export function getDependenciesFolderInfo(): FolderInfo {
    const dependencyFolderName = `${CodeWhispererConstants.dependencyFolderName}${Date.now()}`
    const dependencyFolderPath = path.join(os.tmpdir(), dependencyFolderName)
    return {
        name: dependencyFolderName,
        path: dependencyFolderPath,
    }
}

export async function writeLogs() {
    const logFilePath = path.join(os.tmpdir(), 'build-logs.txt')
    writeFileSync(logFilePath, transformByQState.getErrorLog())
    return logFilePath
}

export async function checkBuildSystem(projectPath: string) {
    const mavenBuildFilePath = path.join(projectPath, 'pom.xml')
    if (existsSync(mavenBuildFilePath)) {
        return BuildSystem.Maven
    }
    return BuildSystem.Unknown
}

export async function createPomCopy(
    dirname: string,
    pomFileVirtualFileReference: vscode.Uri,
    fileName: string
): Promise<vscode.Uri> {
    console.log('In createPomCopy', dirname, pomFileVirtualFileReference, fileName)
    try {
        const newFilePath = path.join(dirname, fileName)
        const pomFileContents = readFileSync(pomFileVirtualFileReference.fsPath)
        if (!existsSync(dirname)) {
            mkdirSync(dirname)
        }
        writeFileSync(newFilePath, pomFileContents)
        return vscode.Uri.file(newFilePath)
    } catch (err) {
        console.log('Error creating pom copy', err)
        throw err
    }
}

export async function replacePomVersion(pomFileVirtualFileReference: vscode.Uri, version: string, delimiter: string) {
    console.log('In replacePomVersion', pomFileVirtualFileReference, version, delimiter)
    try {
        const pomFileText = readFileSync(pomFileVirtualFileReference.fsPath, 'utf-8')
        const pomFileTextWithNewVersion = pomFileText.replace(delimiter, version)
        writeFileSync(pomFileVirtualFileReference.fsPath, pomFileTextWithNewVersion)
    } catch (err) {
        console.log('Error replacing pom version', err)
        throw err
    }
}

export async function getJsonValuesFromManifestFile(
    manifestFileVirtualFileReference: vscode.Uri
): Promise<IManifestFile> {
    console.log('Inside getJsonValuesFromManifestFile', manifestFileVirtualFileReference)
    try {
        const manifestFileContents = readFileSync(manifestFileVirtualFileReference.fsPath, 'utf-8')
        const jsonValues = JSON.parse(manifestFileContents.toString())
        return {
            hilType: jsonValues?.hilType,
            pomFolderName: jsonValues?.pomFolderName,
            sourcePomVersion: jsonValues?.sourcePomVersion,
        }
    } catch (err) {
        console.log('Error parsing manifest.json file', err)
        throw err
    }
}

export async function highlightPomIssueInProject(pomFileVirtualFileReference: vscode.Uri, currentVersion: string) {
    console.log('In highlightPomIssueInProject', pomFileVirtualFileReference, currentVersion)
    // Open the editor and set this pom to activeTextEditor
    await vscode.window.showTextDocument(pomFileVirtualFileReference)

    // Find line number for "latestVersion" or set to first line in file
    const highlightLineNumber = findLineNumber(pomFileVirtualFileReference, currentVersion) || 1
    await setWarningIcon(highlightLineNumber)
}

async function setWarningIcon(lineNumber: number = 0) {
    // Get active diff editor
    const diffEditor = vscode.window.activeTextEditor

    const highlightDecorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'lightgreen',
        isWholeLine: true,
        gutterIconPath: '/packages/toolkit/resources/icons/cloud9/generated/dark/vscode-bug.svg',
        gutterIconSize: '20',
        overviewRulerColor: new vscode.ThemeColor('warning'),
        overviewRulerLane: vscode.OverviewRulerLane.Right,
    })

    // Set the decorations
    diffEditor?.setDecorations(highlightDecorationType, [
        {
            range: new vscode.Range(lineNumber, 0, lineNumber, 50),
            hoverMessage: `### This version needs to be updated. Please see the full list details in the chat
                - latestVersion: 1.18.32
                - majorVersion: 1.12.2
        `,
        },
    ])
}

function findLineNumber(uri: vscode.Uri, searchString: string): number | undefined {
    const textDocument = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === uri.toString())
    if (!textDocument) {
        return undefined
    }

    const text = textDocument.getText()
    let lineNumber = 0
    const lines = text.split('\n')

    for (const line of lines) {
        if (line.includes(searchString)) {
            return lineNumber
        }
        lineNumber++
    }

    return undefined
}

export async function parseXmlDependenciesReport(pathToXmlOutput: string) {
    console.log('In parseXmlDependenciesReport', pathToXmlOutput)
    try {
        const xmlString = readFileSync(pathToXmlOutput, 'utf-8')
        const parser = new xml2js.Parser()
        const parsedOutput = await parser.parseStringPromise(xmlString)

        const report = parsedOutput.DependencyUpdatesReport.dependencies[0].dependency[0]

        const latestVersion = report.lastVersion[0]
        const majorVersions = report.majors[0].major
        const minorVersions = report.minors[0].minor

        return { latestVersion, majorVersions, minorVersions }
    } catch (err) {
        console.log('Error in parseXmlDependenciesReport', err)
        throw err
    }
}