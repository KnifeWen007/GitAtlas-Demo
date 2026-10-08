export interface ShareLink {
  repository: string;
  commit: string;
  expiresAt: string;
}

export function describe(link: ShareLink): string {
  return `${link.repository} @ ${link.commit.slice(0, 7)}`;
}
