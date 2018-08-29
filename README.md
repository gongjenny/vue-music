
# 创建项目和连接git
由于之前安装过全局的vue-cli，所以这次创建vue项目的时候，直接使用cmd，cd到桌面，再使用命令：vue init webpack vue-music.再根据命令填写信息即可，完成之后桌面上就会有一个vue-music 的文件了，那怎么把这个项目push到git上呢，
首先，先在git上创建一个 vue-music 的 repository（分支），再根据他们的提示（如下），粘贴到git命令即可。
```
echo "# vue-music" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:gongjenny/vue-music.git
git push -u origin master
```
## slot 插槽
非具名插槽：父组件的内容，去填充子组件的slot
## 推荐页面代理顺序
使用的是jsonp 的代理方式
```
recommend.vue --> 当前页面js中getRecommend() --> 去recommend.js中找到getRecommend() 函数 --> 里面return了一个jsonp(url, data, options)函数  --> 去common/js/jsonp.js 中找jsonp() 函数，里面用到了promise 构造函数，成功时调用relove(data)，data是调取成功后返回的数据，then() 函数可以获取到data并使用。
```
