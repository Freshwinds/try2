#网站说明

##一.HTML ID 设计


##二.数据库表单设计

###1.文章表 news=id(Number)+contents(String)+comments(String)+order(int)+news(String)

##三.后台API设计

1.GET 获得一个新闻热点对应的所有的评论和内容,返回一个JSON数组
app.get("/allcontents/:news",function()){
}

#代码运行说明

##一.需要配置node.js环境
##二.代码下载后需要进行  npm  install 安装模块

#其他

##开发系统:ubuntu


