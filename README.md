# node-practice
学习nodejs

# 下载依赖

npm install

# 运行：

node start

# 注意：supervisor必须是通过npm install supervisor -g 来安装的。

# node+typescript+express

1. 创建一个文件夹，使用 npm init 初始化node项目，
2. 初始化后文件夹下生成package.json文件，
3. 在文件中添加如下内容：

    "dependencies": {
    "@types/express":"~4.17.0",
    "express": "~4.17.1",
    "ts-node-dev": "^1.0.0-pre.40",
    "typescript": "~3.5.1"

  }

4. 然后通过mkdir build和mkdir app，新建build和app目录，
5. 然后输入tsc --init来初始化tpyescript
6. 修改tsconfig.json，将outDir的注释去掉，然后并修改为："outDIr":"./build/", 
7. 然后修改package.json文件中的scripts，

    "tsc": "tsc", 
    "dev": "ts-node-dev --respawn --transpileOnly ./app/app.ts", 
    "prod": "tsc && supervisor ./build/app.js", 
    "test": "echo \"Error: no test specified\" && exit 1"
8.在app目录中新建一个app.ts文件，文件内容如下：

    import express=require('express');
    const app:express.Application=express();
    app.get('/',function(req,res){
        res.send('Hello World!');
    });
    app.listen(9527,function(){
        console.log('Example app listening on port 9527!');
    })
9.通过npm run dev运行，在"localhost:9527" 或者 "127.0.0.1:9527"访问即可。

