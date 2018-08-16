
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
