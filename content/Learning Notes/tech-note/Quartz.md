#tech-notes #web-app 

[documentation](https://quartz.jzhao.xyz)在这儿

如果要改layout的话直接在root directory下面的layout改就可以了

感觉它是集digital garden, gatsby 之大成

之后只需要多修改一下theme就可以了！

如果要build得话，

> [! ]
> npx quartz build --serve

文件夹在quartz里

## Graph

修改graph的属性，进入 graph.inline.ts 
如果想让每一个node都有标题，把

```javascript

const parent = this.parentNode as HTMLElement

d3.select<HTMLElement, NodeData>(parent)

.select("text")

.transition()

.duration(200)

.style("opacity", 0.5)//这里修改

.style("font-size", fontSize + "em")

})

```

```javascript

const parent = this.parentNode as HTMLElement

d3.select<HTMLElement, NodeData>(parent)

.select("text")

.transition()

.duration(200)

.style("opacity", 0.5)

//.style("opacity", d3.select(parent).select("text").attr("opacityOld"))

.style("font-size", fontSize + "em")

})

```

```javascript

// draw labels

const labels = graphNode

.append("text")

.attr("dx", 0)

.attr("dy", (d) => -nodeRadius(d) + "px")

.attr("text-anchor", "middle")

.text((d) => d.text)

.style("opacity", 0.5)//这里修改

.style("pointer-events", "none")

.style("font-size", fontSize + "em")

.raise()

// @ts-ignore

.call(drag(simulation))

```

``` javascript

Component.Graph({localGraph:{repelForce: 0.8,linkDistance: 40,},globalGraph:{repelForce: 0.8,linkDistance: 40,}})

```

## 写react flow 小插件

- [ ] 写一个单独的node app 可以做react flow, 然后上传到GitHub上
- [ ] react flow 里的custom Node 需要可以显示markdown文件
- [ ] 研究如何单独用token更新artist list到这个github上的文件里
- [ ] 把这个node app deploy到vercel上，网址embed到digital garden 里

## 写评论功能

- [x] 一个component
- [x] 一个component可以输入内容
- [ ] 一个component可以识别当前文件
- [ ] 一个component可以识别当前文件的 ## Comment 标题
- [ ] 一个component可以识别当前文件并且添加文字到当前文档里
- [ ] 一个component可以识别当前文件并且添加文字到当前文档的 Comment 标题底下
- [ ] 一个component可以输入内容，识别当前文件，并且添加之前输入的内容到当前文档的 Comment 标题底下