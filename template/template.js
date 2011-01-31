/**
 * template.js
 * @author qiaofu<amdgigabyte#gmail.com>
 * @DATE 2011-01-30
 */
//使用ejs来编写javascript
//引入ejs来做模板
var http = require('http'),
    sys = require('sys'),
    ejs = require('ejs'),
    fs = require('fs');

var str = fs.readFileSync('./template.kun', 'utf8');

//http.createServer(function(){
var words = ejs.render(str, {
        locals:{
            title : 'qiaofu'
        }
});

console.log(words);
//}).listen('8001');

