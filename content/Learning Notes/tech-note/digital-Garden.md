---
dg-publish: true
tags:
  - tech-notes
  - web-app
---
## 2024-01-12 23:17

digital garden 使用的是[11ty](.dev)，会比gatsby 快而且语法上应该简单一点（不是用的react，虽然 at this point React可能才是我更熟悉的）

接下来需要做的是：

- [x] 如果确定使用digital garden，可以考虑设置obsidian git, 这样更容易自动 push 和 pull（后来发现digital garden 有一套自己的做法，好，就先不搞你了）
- [ ] 写一个单独的node app 可以做react flow, 然后上传到GitHub上
- [ ] react flow 里的custom Node 需要可以显示markdown文件
- [ ] 研究如何单独用token更新artist list到这个github上的文件里
- [ ] 把这个node app deploy到vercel上，网址embed到digital garden 里

其他的[ digital garden 参考](https://github.com/MaggieAppleton/digital-gardeners)