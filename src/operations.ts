export type Operation = 'fetch' | 'pull' | 'push' | 'merge' | 'rollback';

export interface OperationCard {
  operation: Operation;
  label: string;
  destructive: boolean;
}

export const operations: OperationCard[] = [
  { operation: 'fetch', label: '获取远端', destructive: false },
  { operation: 'pull', label: '拉取并合并', destructive: false },
  { operation: 'push', label: '推送', destructive: false },
  { operation: 'rollback', label: '恢复回滚点', destructive: true },
];
