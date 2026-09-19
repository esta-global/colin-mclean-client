const rawApiUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://colin-mclean-api.esta-dev.com/api/v1";

// Ensure no trailing slashes in API_BASE_URL
export const API_BASE_URL = rawApiUrl.replace(/\/+$/, "");

/**
 * Builds a clean API URL without double slashes
 */
export function buildApiUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}
