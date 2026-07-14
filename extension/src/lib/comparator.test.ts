import { describe, it, expect } from "vitest";
import { compareConnections } from "./comparator";
import { InstagramConnection } from "./types";

describe("compareConnections Engine", () => {
  const userA: InstagramConnection = { id: "1", username: "user_a" };
  const userB: InstagramConnection = { id: "2", username: "user_b" };

  it("handles empty arrays", () => {
    const result = compareConnections([], [], "test_user");
    expect(result.notFollowingBack).toEqual([]);
    expect(result.mutuals).toEqual([]);
    expect(result.youDontFollowBack).toEqual([]);
    expect(result.currentUser).toBe("test_user");
  });

  it("identifies all mutuals", () => {
    const followers = [userA, userB];
    const following = [userA, userB];
    const result = compareConnections(followers, following, "test_user");

    expect(result.mutuals).toEqual([userA, userB]);
    expect(result.notFollowingBack).toEqual([]);
    expect(result.youDontFollowBack).toEqual([]);
  });

  it("identifies non-mutuals correctly", () => {
    const followers = [userA]; // A follows us
    const following = [userB]; // We follow B
    const result = compareConnections(followers, following, "test_user");

    expect(result.mutuals).toEqual([]);
    expect(result.notFollowingBack).toEqual([userB]);
    expect(result.youDontFollowBack).toEqual([userA]);
  });

  it("handles duplicate records gracefully", () => {
    const followers = [userA, userA];
    const following = [userA, userB];
    const result = compareConnections(followers, following, "test_user");

    expect(result.mutuals).toEqual([userA]);
    expect(result.notFollowingBack).toEqual([userB]);
    expect(result.youDontFollowBack).toEqual([]);
  });

  it("falls back to username normalization correctly", () => {
    // Missing IDs, rely on usernames
    const f1: InstagramConnection = { id: "", username: "  User_A  " };
    const f2: InstagramConnection = { id: "", username: "USER_b" };
    
    const followers = [f1];
    const following = [f2];
    const result = compareConnections(followers, following, "test_user");

    expect(result.mutuals).toEqual([]);
    expect(result.notFollowingBack.map(u => u.username)).toEqual(["USER_b"]);
    expect(result.youDontFollowBack.map(u => u.username)).toEqual(["  User_A  "]);
  });

  it("handles large generated datasets efficiently", () => {
    const size = 10000;
    const followers: InstagramConnection[] = [];
    const following: InstagramConnection[] = [];

    // Create 10k followers and 10k followings, with 5k overlapping (mutuals)
    for (let i = 0; i < size; i++) {
      const conn: InstagramConnection = { id: `id_${i}`, username: `user_${i}` };
      if (i < 7500) {
        followers.push(conn);
      }
      if (i >= 2500) {
        following.push(conn);
      }
    }

    const start = performance.now();
    const result = compareConnections(followers, following, "test_user");
    const end = performance.now();

    expect(result.mutuals.length).toBe(5000); // index 2500 to 7499
    expect(result.notFollowingBack.length).toBe(2500); // index 7500 to 9999
    expect(result.youDontFollowBack.length).toBe(2500); // index 0 to 2499
    
    // Performance should be well under 100ms for 10k items (usually 2-10ms)
    expect(end - start).toBeLessThan(100);
  });
});
