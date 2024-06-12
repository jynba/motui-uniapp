## motui-uniapp 项目结构

本仓库使用 `pnpm` 管理，包括以下 packages：

1. `packages/motui`: 组件库入口
2. `docs`: 组件库文档站
3. `example`: 调试组件库的示例

## 提交 Pull Request

1. Fork [此仓库](https://github.com/jynba/motui-uniapp)，从 `main` 创建分支。新功能实现请发 pull request 到 `feature` 分支。其他更改发到 `main` 分支。
2. 使用 `pnpm install` 安装依赖。
3. 使用 `pnpm build:all` 编译。
4. 使用 `pnpm run dev` 启动项目，并运行 `pnpm run example` 查看示例，运行 `pnpm run docs` 查看文档站点。