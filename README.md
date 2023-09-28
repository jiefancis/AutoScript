## 技术栈

React、TypeScript、Vite、Less

## webextension-polyfill

使用基于 `webextension-polyfill` 封装的工具库提供的 `API` 代替 `浏览器 API` ，消除浏览器之间的差异。

## 安装

```
pnpm install
```

## 开发

```
pnpm dev
```

## 调试

1. 执行 `pnpm watch` 命令监听 `src` 相关文件变化并自动执行构建命令

2. 将 dist 目录的构建产物导入 chrome 拓展程序进行调试

## 构建

```
pnpm build
```

## 任务暂停与继续

当遇到一些插件脚本无法完成的操作（比如需要用户手动确认、人机验证等），都会暂停任务，等待用户从 myTask 列表中点击暂停图标来继续任务

当前三个任务中，以下两个任务会发生暂停任务的操作：

1. Chainflip Swapping Campaign


    web3任务，自动脚本帮助用户输入需要swap的数据后，需要用户在metamask钱包确定或者拒绝此次交易

2. Get Started with Taiko


    这个大任务下的第一个任务中涉及人机校验，输入验证码的操作需要用户去手动输入
