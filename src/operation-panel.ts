export function statusLabel(clean: boolean, conflicts: number): string {
  if (conflicts > 0) return `需要处理 ${conflicts} 个冲突`;
  return clean ? '工作区干净' : '有未提交改动';
}
