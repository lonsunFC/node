var path = require("path");

var myPath = path.resolve('text.js');

var myPath2 = path.normalize('/test/test1//2slashes/1slash/tab/..');

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('/test/test1/', 'test.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('test.js'));
