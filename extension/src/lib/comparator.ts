import { InstagramConnection, AnalysisResult } from "./types";

/**
 * Normalizes a username for reliable comparison fallback.
 */
export function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

/**
 * Pure business logic comparator to analyze relationships.
 * Uses Set and Map lookup tables to ensure O(N) linear time complexity.
 */
export function compareConnections(
  followers: InstagramConnection[],
  following: InstagramConnection[],
  currentUser: string
): AnalysisResult {
  // Map IDs and normalized usernames to the original connection records
  const followersById = new Map<string, InstagramConnection>();
  const followersByNormalizedName = new Map<string, InstagramConnection>();

  for (const connection of followers) {
    if (connection.id) {
      followersById.set(connection.id, connection);
    }
    followersByNormalizedName.set(normalizeUsername(connection.username), connection);
  }

  const followingById = new Map<string, InstagramConnection>();
  const followingByNormalizedName = new Map<string, InstagramConnection>();

  for (const connection of following) {
    if (connection.id) {
      followingById.set(connection.id, connection);
    }
    followingByNormalizedName.set(normalizeUsername(connection.username), connection);
  }

  // Calculate: notFollowingBack (people user follows who don't follow back)
  // following minus followers
  const notFollowingBack: InstagramConnection[] = [];
  for (const item of following) {
    const isFollower =
      (item.id && followersById.has(item.id)) ||
      followersByNormalizedName.has(normalizeUsername(item.username));

    if (!isFollower) {
      notFollowingBack.push(item);
    }
  }

  // Calculate: mutuals (intersection of following and followers)
  const mutuals: InstagramConnection[] = [];
  for (const item of following) {
    const isFollower =
      (item.id && followersById.has(item.id)) ||
      followersByNormalizedName.has(normalizeUsername(item.username));

    if (isFollower) {
      mutuals.push(item);
    }
  }

  // Calculate: youDontFollowBack (followers who user doesn't follow back)
  // followers minus following
  const youDontFollowBack: InstagramConnection[] = [];
  for (const item of followers) {
    const isFollowing =
      (item.id && followingById.has(item.id)) ||
      followingByNormalizedName.has(normalizeUsername(item.username));

    if (!isFollowing) {
      youDontFollowBack.push(item);
    }
  }

  return {
    currentUser,
    notFollowingBack,
    mutuals,
    youDontFollowBack,
    scannedAt: new Date().toISOString(),
  };
}
