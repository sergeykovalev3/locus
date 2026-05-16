export const AUTHOR_GITHUB_URL = "https://github.com/sergeykovalev3" as const;

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}
