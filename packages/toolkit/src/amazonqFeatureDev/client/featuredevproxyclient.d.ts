
/**
 * THIS FILE IS AUTOGENERATED BY 'generateServiceClient.ts'.
 * DO NOT EDIT BY HAND.
 */

import {Request} from 'aws-sdk/lib/request';
import {Response} from 'aws-sdk/lib/response';
import {AWSError} from 'aws-sdk/lib/error';
import {Service} from 'aws-sdk/lib/service';
import {ServiceConfigurationOptions} from 'aws-sdk/lib/service';
import {ConfigBase as Config} from 'aws-sdk/lib/config-base';
interface Blob {}
declare class FeatureDevProxyClient extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FeatureDevProxyClient.Types.ClientConfiguration)
  config: Config & FeatureDevProxyClient.Types.ClientConfiguration;
  /**
   * Creates a pre-signed, S3 write URL for uploading a repository zip archive.
   */
  createArtifactUploadUrl(params: FeatureDevProxyClient.Types.CreateUploadUrlRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.CreateUploadUrlResponse) => void): Request<FeatureDevProxyClient.Types.CreateUploadUrlResponse, AWSError>;
  /**
   * Creates a pre-signed, S3 write URL for uploading a repository zip archive.
   */
  createArtifactUploadUrl(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.CreateUploadUrlResponse) => void): Request<FeatureDevProxyClient.Types.CreateUploadUrlResponse, AWSError>;
  /**
   * API to create task assist conversation.
   */
  createTaskAssistConversation(params: FeatureDevProxyClient.Types.CreateTaskAssistConversationRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.CreateTaskAssistConversationResponse) => void): Request<FeatureDevProxyClient.Types.CreateTaskAssistConversationResponse, AWSError>;
  /**
   * API to create task assist conversation.
   */
  createTaskAssistConversation(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.CreateTaskAssistConversationResponse) => void): Request<FeatureDevProxyClient.Types.CreateTaskAssistConversationResponse, AWSError>;
  /**
   * Creates a pre-signed, S3 write URL for uploading a repository zip archive.
   */
  createUploadUrl(params: FeatureDevProxyClient.Types.CreateUploadUrlRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.CreateUploadUrlResponse) => void): Request<FeatureDevProxyClient.Types.CreateUploadUrlResponse, AWSError>;
  /**
   * Creates a pre-signed, S3 write URL for uploading a repository zip archive.
   */
  createUploadUrl(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.CreateUploadUrlResponse) => void): Request<FeatureDevProxyClient.Types.CreateUploadUrlResponse, AWSError>;
  /**
   * API to delete task assist conversation.
   */
  deleteTaskAssistConversation(params: FeatureDevProxyClient.Types.DeleteTaskAssistConversationRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.DeleteTaskAssistConversationResponse) => void): Request<FeatureDevProxyClient.Types.DeleteTaskAssistConversationResponse, AWSError>;
  /**
   * API to delete task assist conversation.
   */
  deleteTaskAssistConversation(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.DeleteTaskAssistConversationResponse) => void): Request<FeatureDevProxyClient.Types.DeleteTaskAssistConversationResponse, AWSError>;
  /**
   * Generate completions based on the provided file context in a paginated response.
   */
  generateCompletions(params: FeatureDevProxyClient.Types.GenerateCompletionsRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GenerateCompletionsResponse) => void): Request<FeatureDevProxyClient.Types.GenerateCompletionsResponse, AWSError>;
  /**
   * Generate completions based on the provided file context in a paginated response.
   */
  generateCompletions(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GenerateCompletionsResponse) => void): Request<FeatureDevProxyClient.Types.GenerateCompletionsResponse, AWSError>;
  /**
   * Gets the metadata of a code analysis job.
   */
  getCodeAnalysis(params: FeatureDevProxyClient.Types.GetCodeAnalysisRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GetCodeAnalysisResponse) => void): Request<FeatureDevProxyClient.Types.GetCodeAnalysisResponse, AWSError>;
  /**
   * Gets the metadata of a code analysis job.
   */
  getCodeAnalysis(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GetCodeAnalysisResponse) => void): Request<FeatureDevProxyClient.Types.GetCodeAnalysisResponse, AWSError>;
  /**
   * API to get code transformation status.
   */
  getTransformation(params: FeatureDevProxyClient.Types.GetTransformationRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GetTransformationResponse) => void): Request<FeatureDevProxyClient.Types.GetTransformationResponse, AWSError>;
  /**
   * API to get code transformation status.
   */
  getTransformation(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GetTransformationResponse) => void): Request<FeatureDevProxyClient.Types.GetTransformationResponse, AWSError>;
  /**
   * API to get code transformation status.
   */
  getTransformationPlan(params: FeatureDevProxyClient.Types.GetTransformationPlanRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GetTransformationPlanResponse) => void): Request<FeatureDevProxyClient.Types.GetTransformationPlanResponse, AWSError>;
  /**
   * API to get code transformation status.
   */
  getTransformationPlan(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.GetTransformationPlanResponse) => void): Request<FeatureDevProxyClient.Types.GetTransformationPlanResponse, AWSError>;
  /**
   * 
   */
  listAvailableCustomizations(params: FeatureDevProxyClient.Types.ListAvailableCustomizationsRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.ListAvailableCustomizationsResponse) => void): Request<FeatureDevProxyClient.Types.ListAvailableCustomizationsResponse, AWSError>;
  /**
   * 
   */
  listAvailableCustomizations(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.ListAvailableCustomizationsResponse) => void): Request<FeatureDevProxyClient.Types.ListAvailableCustomizationsResponse, AWSError>;
  /**
   * Lists the findings from a particular code analysis job.
   */
  listCodeAnalysisFindings(params: FeatureDevProxyClient.Types.ListCodeAnalysisFindingsRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.ListCodeAnalysisFindingsResponse) => void): Request<FeatureDevProxyClient.Types.ListCodeAnalysisFindingsResponse, AWSError>;
  /**
   * Lists the findings from a particular code analysis job.
   */
  listCodeAnalysisFindings(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.ListCodeAnalysisFindingsResponse) => void): Request<FeatureDevProxyClient.Types.ListCodeAnalysisFindingsResponse, AWSError>;
  /**
   * Return configruations for each feature that has been setup for A/B testing.
   */
  listFeatureEvaluations(params: FeatureDevProxyClient.Types.ListFeatureEvaluationsRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.ListFeatureEvaluationsResponse) => void): Request<FeatureDevProxyClient.Types.ListFeatureEvaluationsResponse, AWSError>;
  /**
   * Return configruations for each feature that has been setup for A/B testing.
   */
  listFeatureEvaluations(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.ListFeatureEvaluationsResponse) => void): Request<FeatureDevProxyClient.Types.ListFeatureEvaluationsResponse, AWSError>;
  /**
   * API to record telemetry events.
   */
  sendTelemetryEvent(params: FeatureDevProxyClient.Types.SendTelemetryEventRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.SendTelemetryEventResponse) => void): Request<FeatureDevProxyClient.Types.SendTelemetryEventResponse, AWSError>;
  /**
   * API to record telemetry events.
   */
  sendTelemetryEvent(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.SendTelemetryEventResponse) => void): Request<FeatureDevProxyClient.Types.SendTelemetryEventResponse, AWSError>;
  /**
   * Starts a code analysis job
   */
  startCodeAnalysis(params: FeatureDevProxyClient.Types.StartCodeAnalysisRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.StartCodeAnalysisResponse) => void): Request<FeatureDevProxyClient.Types.StartCodeAnalysisResponse, AWSError>;
  /**
   * Starts a code analysis job
   */
  startCodeAnalysis(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.StartCodeAnalysisResponse) => void): Request<FeatureDevProxyClient.Types.StartCodeAnalysisResponse, AWSError>;
  /**
   * API to start code translation.
   */
  startTransformation(params: FeatureDevProxyClient.Types.StartTransformationRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.StartTransformationResponse) => void): Request<FeatureDevProxyClient.Types.StartTransformationResponse, AWSError>;
  /**
   * API to start code translation.
   */
  startTransformation(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.StartTransformationResponse) => void): Request<FeatureDevProxyClient.Types.StartTransformationResponse, AWSError>;
  /**
   * API to stop code transformation status.
   */
  stopTransformation(params: FeatureDevProxyClient.Types.StopTransformationRequest, callback?: (err: AWSError, data: FeatureDevProxyClient.Types.StopTransformationResponse) => void): Request<FeatureDevProxyClient.Types.StopTransformationResponse, AWSError>;
  /**
   * API to stop code transformation status.
   */
  stopTransformation(callback?: (err: AWSError, data: FeatureDevProxyClient.Types.StopTransformationResponse) => void): Request<FeatureDevProxyClient.Types.StopTransformationResponse, AWSError>;
}
declare namespace FeatureDevProxyClient {
  export type ArtifactMap = {[key: string]: UploadId};
  export type ArtifactType = "SourceCode"|"BuiltJars"|string;
  export type Base64EncodedPaginationToken = string;
  export type Boolean = boolean;
  export type CodeAnalysisFindingsSchema = "codeanalysis/findings/1.0"|string;
  export type CodeAnalysisStatus = "Completed"|"Pending"|"Failed"|string;
  export interface CodeCoverageEvent {
    customizationArn?: CustomizationArn;
    programmingLanguage: ProgrammingLanguage;
    acceptedCharacterCount: PrimitiveInteger;
    totalCharacterCount: PrimitiveInteger;
    timestamp: Timestamp;
  }
  export interface CodeScanEvent {
    programmingLanguage: ProgrammingLanguage;
    codeScanJobId: CodeScanJobId;
    timestamp: Timestamp;
  }
  export type CodeScanJobId = string;
  export interface Completion {
    content: CompletionContentString;
    references?: References;
    mostRelevantMissingImports?: Imports;
  }
  export type CompletionContentString = string;
  export type CompletionType = "BLOCK"|"LINE"|string;
  export type Completions = Completion[];
  export type ContentChecksumType = "SHA_256"|string;
  export type ContextTruncationScheme = "ANALYSIS"|"GUMBY"|string;
  export type ConversationId = string;
  export interface CreateTaskAssistConversationRequest {
  }
  export interface CreateTaskAssistConversationResponse {
    conversationId: ConversationId;
  }
  export interface CreateUploadUrlRequest {
    contentMd5?: CreateUploadUrlRequestContentMd5String;
    contentChecksum?: CreateUploadUrlRequestContentChecksumString;
    contentChecksumType?: ContentChecksumType;
    contentLength?: CreateUploadUrlRequestContentLengthLong;
    artifactType?: ArtifactType;
    uploadIntent?: UploadIntent;
    uploadContext?: UploadContext;
  }
  export type CreateUploadUrlRequestContentChecksumString = string;
  export type CreateUploadUrlRequestContentLengthLong = number;
  export type CreateUploadUrlRequestContentMd5String = string;
  export interface CreateUploadUrlResponse {
    uploadId: UploadId;
    uploadUrl: PreSignedUrl;
    kmsKeyArn?: ResourceArn;
  }
  export interface Customization {
    arn: CustomizationArn;
    name?: CustomizationName;
    description?: Description;
  }
  export type CustomizationArn = string;
  export type CustomizationName = string;
  export type Customizations = Customization[];
  export interface DeleteTaskAssistConversationRequest {
    conversationId: ConversationId;
  }
  export interface DeleteTaskAssistConversationResponse {
    conversationId: ConversationId;
  }
  export type Description = string;
  export interface Dimension {
    name?: DimensionNameString;
    value?: DimensionValueString;
  }
  export type DimensionList = Dimension[];
  export type DimensionNameString = string;
  export type DimensionValueString = string;
  export type Double = number;
  export interface FeatureEvaluation {
    feature: FeatureName;
    variation: FeatureVariation;
    value: FeatureValue;
  }
  export type FeatureEvaluationsList = FeatureEvaluation[];
  export type FeatureName = string;
  export interface FeatureValue {
    boolValue?: Boolean;
    doubleValue?: Double;
    longValue?: Long;
    stringValue?: FeatureValueStringType;
  }
  export type FeatureValueStringType = string;
  export type FeatureVariation = string;
  export interface FileContext {
    leftFileContent: FileContextLeftFileContentString;
    rightFileContent: FileContextRightFileContentString;
    filename: FileContextFilenameString;
    programmingLanguage: ProgrammingLanguage;
  }
  export type FileContextFilenameString = string;
  export type FileContextLeftFileContentString = string;
  export type FileContextRightFileContentString = string;
  export interface GenerateCompletionsRequest {
    fileContext: FileContext;
    maxResults?: GenerateCompletionsRequestMaxResultsInteger;
    nextToken?: GenerateCompletionsRequestNextTokenString;
    referenceTrackerConfiguration?: ReferenceTrackerConfiguration;
    supplementalContexts?: SupplementalContextList;
    customizationArn?: CustomizationArn;
    optOutPreference?: OptOutPreference;
    userContext?: UserContext;
  }
  export type GenerateCompletionsRequestMaxResultsInteger = number;
  export type GenerateCompletionsRequestNextTokenString = string;
  export interface GenerateCompletionsResponse {
    completions?: Completions;
    nextToken?: SensitiveString;
  }
  export interface GetCodeAnalysisRequest {
    jobId: GetCodeAnalysisRequestJobIdString;
  }
  export type GetCodeAnalysisRequestJobIdString = string;
  export interface GetCodeAnalysisResponse {
    status: CodeAnalysisStatus;
    errorMessage?: SensitiveString;
  }
  export interface GetTransformationPlanRequest {
    transformationJobId: TransformationJobId;
  }
  export interface GetTransformationPlanResponse {
    transformationPlan: TransformationPlan;
  }
  export interface GetTransformationRequest {
    transformationJobId: TransformationJobId;
  }
  export interface GetTransformationResponse {
    transformationJob: TransformationJob;
  }
  export type IdeCategory = "JETBRAINS"|"VSCODE"|string;
  export type IdempotencyToken = string;
  export interface Import {
    statement?: ImportStatementString;
  }
  export type ImportStatementString = string;
  export type Imports = Import[];
  export interface ListAvailableCustomizationsRequest {
    maxResults?: ListAvailableCustomizationsRequestMaxResultsInteger;
    nextToken?: Base64EncodedPaginationToken;
  }
  export type ListAvailableCustomizationsRequestMaxResultsInteger = number;
  export interface ListAvailableCustomizationsResponse {
    customizations: Customizations;
    nextToken?: Base64EncodedPaginationToken;
  }
  export interface ListCodeAnalysisFindingsRequest {
    jobId: ListCodeAnalysisFindingsRequestJobIdString;
    nextToken?: PaginationToken;
    codeAnalysisFindingsSchema: CodeAnalysisFindingsSchema;
  }
  export type ListCodeAnalysisFindingsRequestJobIdString = string;
  export interface ListCodeAnalysisFindingsResponse {
    nextToken?: PaginationToken;
    codeAnalysisFindings: SensitiveString;
  }
  export interface ListFeatureEvaluationsRequest {
    userContext: UserContext;
  }
  export interface ListFeatureEvaluationsResponse {
    featureEvaluations: FeatureEvaluationsList;
  }
  export type Long = number;
  export interface MetricData {
    metricName: MetricDataMetricNameString;
    metricValue: Double;
    timestamp: Timestamp;
    dimensions?: DimensionList;
  }
  export type MetricDataMetricNameString = string;
  export type OperatingSystem = "MAC"|"WINDOWS"|"LINUX"|string;
  export type OptOutPreference = "OPTIN"|"OPTOUT"|string;
  export type PaginationToken = string;
  export type PreSignedUrl = string;
  export type PrimitiveInteger = number;
  export interface ProgrammingLanguage {
    languageName: ProgrammingLanguageLanguageNameString;
  }
  export type ProgrammingLanguageLanguageNameString = string;
  export type ProgressUpdates = TransformationProgressUpdate[];
  export type RecommendationsWithReferencesPreference = "BLOCK"|"ALLOW"|string;
  export interface Reference {
    /**
     * License name
     */
    licenseName?: ReferenceLicenseNameString;
    /**
     * Code Repsitory for the associated reference
     */
    repository?: ReferenceRepositoryString;
    /**
     * Respository URL
     */
    url?: ReferenceUrlString;
    /**
     * Span / Range for the Reference
     */
    recommendationContentSpan?: Span;
  }
  export type ReferenceLicenseNameString = string;
  export type ReferenceRepositoryString = string;
  export interface ReferenceTrackerConfiguration {
    recommendationsWithReferences: RecommendationsWithReferencesPreference;
  }
  export type ReferenceUrlString = string;
  export type References = Reference[];
  export type ResourceArn = string;
  export interface SendTelemetryEventRequest {
    clientToken?: IdempotencyToken;
    telemetryEvent: TelemetryEvent;
    optOutPreference?: OptOutPreference;
    userContext?: UserContext;
  }
  export interface SendTelemetryEventResponse {
  }
  export type SensitiveString = string;
  export interface Span {
    start?: SpanStartInteger;
    end?: SpanEndInteger;
  }
  export type SpanEndInteger = number;
  export type SpanStartInteger = number;
  export interface StartCodeAnalysisRequest {
    artifacts: ArtifactMap;
    programmingLanguage: ProgrammingLanguage;
    clientToken?: StartCodeAnalysisRequestClientTokenString;
  }
  export type StartCodeAnalysisRequestClientTokenString = string;
  export interface StartCodeAnalysisResponse {
    jobId: StartCodeAnalysisResponseJobIdString;
    status: CodeAnalysisStatus;
    errorMessage?: SensitiveString;
  }
  export type StartCodeAnalysisResponseJobIdString = string;
  export interface StartTransformationRequest {
    workspaceState: WorkspaceState;
    transformationSpec: TransformationSpec;
  }
  export interface StartTransformationResponse {
    transformationJobId: TransformationJobId;
  }
  export type StepId = string;
  export interface StopTransformationRequest {
    transformationJobId: TransformationJobId;
  }
  export interface StopTransformationResponse {
    transformationStatus: TransformationStatus;
  }
  export type String = string;
  export type SuggestionState = "ACCEPT"|"REJECT"|"DISCARD"|"EMPTY"|string;
  export interface SupplementalContext {
    filePath: SupplementalContextFilePathString;
    content: SupplementalContextContentString;
  }
  export type SupplementalContextContentString = string;
  export type SupplementalContextFilePathString = string;
  export type SupplementalContextList = SupplementalContext[];
  export interface TaskAssistPlanningUploadContext {
    conversationId: ConversationId;
  }
  export interface TelemetryEvent {
    userTriggerDecisionEvent?: UserTriggerDecisionEvent;
    codeCoverageEvent?: CodeCoverageEvent;
    userModificationEvent?: UserModificationEvent;
    codeScanEvent?: CodeScanEvent;
    metricData?: MetricData;
  }
  export type Timestamp = Date;
  export interface TransformationJob {
    jobId?: TransformationJobId;
    transformationSpec?: TransformationSpec;
    status?: TransformationStatus;
    reason?: String;
    creationTime?: Timestamp;
    startExecutionTime?: Timestamp;
    endExecutionTime?: Timestamp;
  }
  export type TransformationJobId = string;
  export type TransformationLanguage = "JAVA_8"|"JAVA_11"|"JAVA_17"|string;
  export interface TransformationPlan {
    transformationSteps: TransformationSteps;
  }
  export interface TransformationProgressUpdate {
    name: String;
    status: TransformationProgressUpdateStatus;
    description?: String;
    startTime?: Timestamp;
    endTime?: Timestamp;
  }
  export type TransformationProgressUpdateStatus = "IN_PROGRESS"|"COMPLETED"|"FAILED"|string;
  export interface TransformationProjectState {
    language?: TransformationLanguage;
  }
  export interface TransformationSpec {
    transformationType?: TransformationType;
    source?: TransformationProjectState;
    target?: TransformationProjectState;
  }
  export type TransformationStatus = "CREATED"|"ACCEPTED"|"REJECTED"|"STARTED"|"PREPARING"|"PREPARED"|"PLANNING"|"PLANNED"|"TRANSFORMING"|"TRANSFORMED"|"FAILED"|"COMPLETED"|"PARTIALLY_COMPLETED"|"STOPPING"|"STOPPED"|string;
  export interface TransformationStep {
    id: StepId;
    name: String;
    description: String;
    status: TransformationStepStatus;
    progressUpdates?: ProgressUpdates;
    startTime?: Timestamp;
    endTime?: Timestamp;
  }
  export type TransformationStepStatus = "CREATED"|"COMPLETED"|"PARTIALLY_COMPLETED"|"STOPPED"|"FAILED"|string;
  export type TransformationSteps = TransformationStep[];
  export type TransformationType = "LANGUAGE_UPGRADE"|string;
  export type UUID = string;
  export interface UploadContext {
    taskAssistPlanningUploadContext?: TaskAssistPlanningUploadContext;
  }
  export type UploadId = string;
  export type UploadIntent = "TRANSFORMATION"|"TASK_ASSIST_PLANNING"|string;
  export interface UserContext {
    ideCategory: IdeCategory;
    operatingSystem: OperatingSystem;
    product: UserContextProductString;
  }
  export type UserContextProductString = string;
  export interface UserModificationEvent {
    sessionId: UUID;
    requestId: UUID;
    programmingLanguage: ProgrammingLanguage;
    modificationPercentage: Double;
    customizationArn?: CustomizationArn;
    timestamp: Timestamp;
  }
  export interface UserTriggerDecisionEvent {
    sessionId: UUID;
    requestId: UUID;
    customizationArn?: CustomizationArn;
    programmingLanguage: ProgrammingLanguage;
    completionType: CompletionType;
    suggestionState: SuggestionState;
    recommendationLatencyMilliseconds: Double;
    timestamp: Timestamp;
    suggestionReferenceCount?: PrimitiveInteger;
    generatedLine?: PrimitiveInteger;
  }
  export interface WorkspaceState {
    /**
     * Upload ID representing an Upload using a PreSigned URL
     */
    uploadId: UploadId;
    /**
     * Primary programming language of the Workspace
     */
    programmingLanguage: ProgrammingLanguage;
    /**
     * Workspace context truncation schemes based on usecase
     */
    contextTruncationScheme?: ContextTruncationScheme;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-11-11"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the FeatureDevProxyClient client.
   */
  export import Types = FeatureDevProxyClient;
}
export = FeatureDevProxyClient;

    