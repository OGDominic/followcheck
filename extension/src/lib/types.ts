export interface InstagramConnection {
  id: string;
  username: string;
  fullName?: string;
  profilePicUrl?: string;
}

export type ScanStatus = "idle" | "scanning" | "complete" | "cancelled" | "error";

export interface ScanProgress {
  status: ScanStatus;
  followersScanned: number;
  followingScanned: number;
  followerTarget?: number;
  followingTarget?: number;
  error?: string;
}

export interface AnalysisResult {
  currentUser: string;
  notFollowingBack: InstagramConnection[];
  mutuals: InstagramConnection[];
  youDontFollowBack: InstagramConnection[];
  scannedAt: string;
}

export interface InstagramState {
  isOpen: boolean;
  isLoggedIn: boolean;
  username?: string;
  userId?: string;
}
