#!/usr/bin/env node
/**
 * 一键制造 / 还原"工作区改动"演示场景。
 *
 * 用法：
 *   node scripts/demo-worktree.mjs           制造改动（改一个已跟踪文件 + 新建一个未跟踪文件）
 *   node scripts/demo-worktree.mjs --revert  还原，回到干净状态
 *
 * 这样演示仓库本身可以一直保持干净、随时推送，需要演示时再现场变脏。
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const revert = process.argv.includes('--revert');

const TARGET = 'src/view-config.ts';
const UNTRACKED = 'notes/待定想法.md';
const EXTRA_LINES = [
  "export const inspectorWidth = '60vw';",
  "export const rememberLastRepo = true;",
];

const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

if (revert) {
  git('checkout', '--', TARGET);
  fs.rmSync(path.join(root, UNTRACKED), { force: true });
  const dir = path.dirname(path.join(root, UNTRACKED));
  if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  const dirty = git('status', '--porcelain').trim();
  console.log(dirty.length === 0 ? '已还原，工作区干净。' : `还有未还原的改动：\n${dirty}`);
  process.exit(0);
}

const target = path.join(root, TARGET);
const current = fs.readFileSync(target, 'utf8');
if (current.includes(EXTRA_LINES[0])) {
  console.log('改动已经在了，直接去 GitAtlas 里点「刷新状态」看效果。');
  process.exit(0);
}

fs.writeFileSync(target, `${current.trimEnd()}\n${EXTRA_LINES.join('\n')}\n`, 'utf8');
fs.mkdirSync(path.dirname(path.join(root, UNTRACKED)), { recursive: true });
fs.writeFileSync(
  path.join(root, UNTRACKED),
  '# 待定想法\n\n- 检查器里加一个「只看这一行历史」的入口\n- 图谱支持按作者过滤\n',
  'utf8',
);

console.log('已制造工作区改动：');
console.log(`  修改  ${TARGET}`);
console.log(`  未跟踪 ${UNTRACKED}`);
console.log('\n接下来：在 GitAtlas 里点「刷新状态」，应显示 2 个文件有改动；');
console.log('点文件名可以看逐行差异，试完执行 node scripts/demo-worktree.mjs --revert 还原。');
