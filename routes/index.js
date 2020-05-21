var express = require('express');
var router = express.Router();
const path = require('path')
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/api/userInfo', function(req, res) {
    // --
    var file = path.join(__dirname, '../json/userInfo.json');
    console.log('file', file)
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(JSON.parse(data));
        }
    });
})

module.exports = router;