import { AvatarIcon } from "@vanguard/Avatar/Avatar";

/**
 * Detects the social media network from a URL
 * @param url - The social media URL
 * @returns The detected network identifier or undefined if not recognized
 */
export function detectNetworkFromUrl(url: string): AvatarIcon | undefined {
  if (!url) return undefined;

  const lowerUrl = url.toLowerCase();

  // Facebook
  if (lowerUrl.includes("facebook.com") || lowerUrl.includes("fb.com")) {
    return "facebook";
  }

  // Instagram
  if (lowerUrl.includes("instagram.com")) {
    return "instagram";
  }

  // YouTube
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
    return "youtube";
  }

  // LinkedIn
  if (lowerUrl.includes("linkedin.com")) {
    return "linkedin";
  }

  // Pinterest
  if (lowerUrl.includes("pinterest.com") || lowerUrl.includes("pin.it")) {
    return "pinterest";
  }

  // TikTok
  if (lowerUrl.includes("tiktok.com")) {
    return "tiktok";
  }

  // Twitter / X
  if (lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com")) {
    return "twitter";
  }

  return undefined;
}
