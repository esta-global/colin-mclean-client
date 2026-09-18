export const formatDate = (value: string, compact = false) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: compact ? "short" : "long", year: "numeric", timeZone: "UTC" }).format(new Date(value));
export const xmlEscape = (value: string) => value.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char]!);
