import { ScanProgress, InstagramConnection, InstagramState } from "./types";

export type MessageType =
  | "CHECK_INSTAGRAM_STATE"
  | "INSTAGRAM_STATE_RESPONSE"
  | "START_SCAN"
  | "SCAN_PROGRESS"
  | "SCAN_COMPLETE"
  | "SCAN_ERROR"
  | "CANCEL_SCAN"
  | "CLEAR_ANALYSIS";

export interface BaseMessage {
  type: MessageType;
}

export interface CheckInstagramStateMessage extends BaseMessage {
  type: "CHECK_INSTAGRAM_STATE";
}

export interface InstagramStateResponseMessage extends BaseMessage {
  type: "INSTAGRAM_STATE_RESPONSE";
  state: InstagramState;
}

export interface StartScanMessage extends BaseMessage {
  type: "START_SCAN";
}

export interface ScanProgressMessage extends BaseMessage {
  type: "SCAN_PROGRESS";
  progress: ScanProgress;
}

export interface ScanCompleteMessage extends BaseMessage {
  type: "SCAN_COMPLETE";
  followers: InstagramConnection[];
  following: InstagramConnection[];
  currentUser: string;
}

export interface ScanErrorMessage extends BaseMessage {
  type: "SCAN_ERROR";
  error: string;
}

export interface CancelScanMessage extends BaseMessage {
  type: "CANCEL_SCAN";
}

export interface ClearAnalysisMessage extends BaseMessage {
  type: "CLEAR_ANALYSIS";
}

export type ExtensionMessage =
  | CheckInstagramStateMessage
  | InstagramStateResponseMessage
  | StartScanMessage
  | ScanProgressMessage
  | ScanCompleteMessage
  | ScanErrorMessage
  | CancelScanMessage
  | ClearAnalysisMessage;
