'use strict';
var express =require('express');
var orm=require('orm');
var bodyparser=require("body-parser");
//let mailer=require("./mailer");



var app = express();




app.use(express.static(__dirname+'/'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({limit:'50mb', extended: true}));


//使用orm连接数据库：
orm.connect('sqlite:/usr/local/deployment/blue/new.db ', function(err, db) {
    if (err) {
        return console.error('Connection error: ' + err);
    }
    else {
        console.log('success!');
    }
});

app.use(orm.express("sqlite:/usr/local/deployment/blue/new.db", {
    define: function (db, models, next) {
        models.articles=db.define("articles",{
            id:{type:'numnodeber'},
            contents:{type:'text'},
            comments:{type:'text'},
            order:{type:'text'},
            news:{type:'text'}

        });


        next();
    }
}));

//加载页面
app.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.get('/news/:search',function (req,res) {
    let this_news = req.params.search;

    req.models.articles.find({news:orm.like("%"+this_news+"%")},function(err,allcontents){
        console.log(allcontents);
        res.json(allcontents);

    })
});


let server = app.listen(1133,function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("访问地址为 http://%s:%s", host, port);
});
