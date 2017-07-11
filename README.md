## **前言**
由于上次搭好了SSM后端框架，就想着顺便把以前那个博客网站的后台管理系统给做了，系统的后端环境是有了，前端页面用什么开发呢？之前简单的看了vue.js，所以就决定用vue.js做前端页面，然后搜了一些vue.js配套的ui，找到了elementUI。而在看vue.js的时候看到上面说了npm安装，于是就想起了这个，就想知道这是什么，于是各种Google，差不多了解了现在的前端开发是什么样的了。感觉是跟后端差不多，要安装服务程序，要用包管理工具，用包管理工具从远程仓库中拉去各种框架的包来搭建开发环境，设计好目录结构，然后开始开发，开发完了打包带走。因为开发前端也要服务器，不是以前的静态页面跳转，所以在测试时的时候前端页面访问后端的时候需要跨域访问，还好SpringMVC只要简单配置一下就可以了。
以下只说明如何在windows环境下快速地搭建开发环境进行开发，不进行任何介绍，相关介绍网上都有很多。
## **搭建开发环境**
### **安装webpack**
首先要安装[Node.js](https://nodejs.org/en/download/)，Node.js集成了[npm](https://docs.npmjs.com/)（node package manage），所以安装了Node.js就自然有了npm，可以用	`$ npm -v` 命令查看有没有安装npm。 
npm介绍：[npm使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)

有了npm就可以安装[webpack](https://webpack.github.io/docs/)了，打开命令行工具输入以下命令安装webpakc：

	npm install webpack -g
后面的-g表示全局安装，此时webpck应该安装到了全局环境下，可以用	命令：`webpack -h`试试看。

npm就像Maven一样，帮你从远程仓库拉取各种包，也跟Maven一样有个国外的访问很慢的中央仓库，又跟Maven一样有国内自己的镜像：

	npm install -g cnpm --registry=https://registry.npm.taobao.org
可以用这个命令安装淘宝的镜像，然后就可以将用cnpm命令取代npm命令了，速度会快一点。

现在Node.js，npm，webpack都安装好了，所以可以用webpack搭建开发环境了，可以参考这两个简介：
[webpack中文指南](http://zhaoda.net/webpack-handbook/install.html)
[入门webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f)

### **安装vue-cli**
但是自己手动搭建开发环境太慢了，我们用的是vue.js，刚好可以用[vue cli](https://github.com/vuejs/vue-cli)来快速地搭建基于vue.j的开发环境，命令行输入下面的命令安装vue-cli：

	npm install vue-cli -g
然后找一个目录准备创建项目，使用

	vue init <template-name> <project-name>
命令进行项目的创建和初始化，template-name是vue-cli提供的几种模板名字，可以不输入。
vue -cli参考资料：[Vue-cli图文视频教程](https://juejin.im/entry/58f48484da2f60005d3cb46c)
初始化命令界面：
![这里写图片描述](http://img.blog.csdn.net/20170711114301555?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
上面的问号都是yes or no。

目录结构：
![这里写图片描述](http://img.blog.csdn.net/20170711114612448?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

目录中的node_moduless文件夹是没有的，进行项目创建和初始化之后是没有一些依赖包的，这个时候我们就要进入项目的目录下，使用

	npm install
命令来初始化依赖包，初始化需要的包都在package.json里面设置好了，这样一个基本的项目环境搭建好了。

	npm run dev
输入上面的命令运行项目
![这里写图片描述](http://img.blog.csdn.net/20170711115302640?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

运行成功。
至此，项目的开发环境成功搭建，接下来就要进行项目的开发了。

## **项目示例**
项目开发都是在src文件夹下进行的。
因为是基于Vue.js和elementUI进行的项目开发，所以当然要导入Vue.j包和elementUI包：

	npm install --save vue element-ui
要进行页面跳转，所以要用到[vue-router2](https://router.vuejs.org/zh-cn/)：

	npm install --save vue-router
要从后端获取数据，所以要ajax请求，用vue官方推荐的[axios](https://www.kancloud.cn/yunye/axios/234845)：

	npminstall --save axios

### **开发工具Sublime Text3的插件配置**
**方式一：**
安装Sublime text 3插件很方便，可以直接下载安装包解压缩到Packages目录（菜单->preferences->Browse Packages）。
**方式二：使用Package Control组件安装**
也可以安装package control组件，然后直接在线安装：

1.按Ctrl+`调出console
2.粘贴以下代码到命令行并回车：
```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```
3.重启Sublime Text 3。
4.如果在Perferences->package settings中看到package control这一项，则安装成功。
5.按下Ctrl+Shift+P调出命令面板
6.输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件。
![这里写图片描述](http://img.blog.csdn.net/20170711123058279?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


由于我是用vue开发的，所以当然要安装vue相关的插件，在弹出的列表里输入vue就有vue相关的插件。
Emmet插件当然也是必装的。


![这里写图片描述](http://img.blog.csdn.net/20170711123306109?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### **目录结构**
![这里写图片描述](http://img.blog.csdn.net/20170711124146215?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

还可以根据不同模块在各个文件下面进行细分
### **项目展示**
**上面的博客管理是要与后台交互的**

![这里写图片描述](http://img.blog.csdn.net/20170711124330233?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

**下面的是elementUI部分组件的展示**

![这里写图片描述](http://img.blog.csdn.net/20170711124515108?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTmljb3J1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## **参考资料汇总**
npm： [npm使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)
webpack： [webpack中文指南](http://zhaoda.net/webpack-handbook/install.html)  |  [入门webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f)
vue-cli： [Vue-cli图文视频教程](https://juejin.im/entry/58f48484da2f60005d3cb46c)
vue-router2： [vue-router2](https://router.vuejs.org/zh-cn/)
axios： [axios](https://www.kancloud.cn/yunye/axios/234845)

源码：[前端](https://github.com/OverrideRe/vue-elementui-demo)，[后端](https://github.com/OverrideRe/ssm)
