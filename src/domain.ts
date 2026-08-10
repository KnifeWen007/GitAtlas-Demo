export type RepositoryMode = 'local' | 'shared';

export interface RepositorySummary {
  name: string;
  commits: number;
  branches: number;
  tags: number;
}

export const schemaVersion = 1;
