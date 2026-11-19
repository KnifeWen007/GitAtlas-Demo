# GitAtlas-Demo

GitAtlas 官方演示仓库：

- 远程地址：[github.com/KnifeWen007/GitAtlas-Demo](https://github.com/KnifeWen007/GitAtlas-Demo)
- 本地路径：`F:\Projects\GitAtlas-Demo`
- 主项目：[github.com/KnifeWen007/GitAtlas](https://github.com/KnifeWen007/GitAtlas)

用来展示 GitAtlas 的提交图谱、分支关系、标签、工作区状态和操作台。

## 这个仓库故意包含什么

- `main` 主线和多个已合并的功能分支
- `feature/mobile-layout` 未合并分支，用来观察分支链
- `demo/conflict-playground` 冲突练习分支，不要直接在真实项目上试冲突
- `v0.1.0`、`v0.2.0`、`v0.3.0-demo` 和演示专用标签
- 文档、源码、样例数据和测试文件，方便覆盖不同文件状态

## 用 GitAtlas 打开

1. 启动 GitAtlas 桌面版。
2. 点击「添加仓库」并选择本目录。
3. 在「提交图谱」查看分支分叉、合并弧线和标签。
4. 在「操作台」测试获取、分支切换、打标签、暂存、提交和回滚。
5. 如需演示冲突，先切到 `main`，再尝试合并 `demo/conflict-playground`；操作前 GitAtlas 会自动保留回滚点。

## 演示工作区改动

仓库默认保持干净，工作区状态用脚本现场制造，这样屏幕上「干净 → 有改动 → 已暂存」的切换才看得见：

```bash
node scripts/demo-worktree.mjs            # 改一个文件 + 建一个未跟踪文件
node scripts/demo-worktree.mjs --revert   # 还原成干净状态
```

制造出来之后回到 GitAtlas：

1. 点「刷新状态」，徽标会从「工作区干净」变成「2 个文件有改动」。
2. 点文件名看逐行差异，绿色是新增行、红色是删除行。
3. 点「暂存」，文件会从「未暂存」移到「已暂存」，此时再点文件名看到的是暂存区差异。
4. 填一句提交说明后点「提交全部改动」，图谱顶部立刻多出一个提交。
5. 想反悔就点「丢弃」（两段确认），文件回到上一次提交的样子。

不想用脚本也可以：直接改任意一个已跟踪文件，或新建一个临时文件，效果一样。

## 分支说明

| 分支 | 用途 | 状态 |
| --- | --- | --- |
| `main` | 主线 | 演示起点 |
| `demo/conflict-playground` | 与 `main` 改同一行，用来复现冲突 | 故意保持分歧，不要合并进远程 |
| `feature/mobile-layout` | 未合并的开发链 | 观察分叉 |
| `feature/graph-canvas` 等 | 已合并的历史分支 | 观察合并弧线 |

如果 `demo/conflict-playground` 被误合并，可以在 GitAtlas 操作台里用自动保留的回滚点退回合并前的状态，不必敲命令。

## 免责声明

这是专门用于产品演示的本地 Git 仓库，不承载真实业务代码。
