#tech-notes #web-app 

[documentation](https://quartz.jzhao.xyz)在这儿

如果要改layout的话直接在root directory下面的layout改就可以了

感觉它是集digital garden, gatsby 之大成

之后只需要多修改一下theme就可以了！

如果要build得话，

> [! ]
> npx quartz build --serve

文件夹在quartz里

## Set up Github

To create a new `main` branch based on the current branch or another branch, you can follow these steps:

### If You Want to Create `main` Based on the Current Branch:

1. **Check Your Current Branch:** First, make sure you are on the branch you want to use as the basis for `main`.
    
    bashCopy code
    
    `git branch`
    
    This will list all branches, with the current branch highlighted.
    
2. **Create the `main` Branch:** If you are on the desired branch, you can create `main` directly from it.
    
    bashCopy code
    
    `git branch main`
    
    This creates a new branch named `main` based on your current branch.
    
3. **Switch to the `main` Branch:** Switch to the `main` branch to start using it.
    
    bashCopy code
    
    `git checkout main`
4. **set the remote of the repository**
	 

## Deploy to Netlify

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
- [x] 一个component可用script，识别inbox里的变量
- [ ] 添加文字到当前文档里
- [ ] 用footnote syntax的方式实现评论功能

[Isso](https://isso-comments.de/docs/guides/quickstart/)
找到这个，感觉可以试试看

~~## footnote function

enable the footnote for the website to link to specific paragraph~~

