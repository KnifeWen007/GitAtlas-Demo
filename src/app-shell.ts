import type { RepositorySummary } from './domain';

export function renderSummary(summary: RepositorySummary): string {
  return `${summary.name} · ${summary.commits} commits · ${summary.branches} branches`;
}

export const defaultView = 'graph';
export const graphHeight = 560;
