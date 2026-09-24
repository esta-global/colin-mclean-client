const defaultLocalApiUrl = "http://localhost:5900/api/v1";
const defaultProductionApiUrl = "https://colin-mclean-api.esta-dev.com/api/v1";

const rawApiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "development"
    ? defaultLocalApiUrl
    : defaultProductionApiUrl);

// Ensure no trailing slashes in API_BASE_URL
export const API_BASE_URL = rawApiUrl.replace(/\/+$/, "");

const rawFileUrl =
  process.env.NEXT_PUBLIC_FILE_URL ||
  API_BASE_URL.replace(/\/api(\/v\d+)?\/?$/i, "") + "/uploads";

export const FILE_BASE_URL = rawFileUrl.replace(/\/+$/, "");

/**
 * Builds a clean API URL without double slashes
 */
export function buildApiUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}
