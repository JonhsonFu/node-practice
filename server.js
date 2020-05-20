const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 9527


app.get('/userInfo', function(req, res) {
    // --
    var file = path.join(__dirname, 'json/userInfo.json');
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(data);
        }
    });
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))