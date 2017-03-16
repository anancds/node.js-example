console.log(__filename);

console.log(__dirname);

function printHello() {
  console.log("Hello world!");
}

var t = setTimeout(printHello, 2000);

// clearTimeout(t);

var s = setInterval(printHello, 2000);

clearInterval(s);

// console.trace();

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

console.log('uid: ' + process.getuid);


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);
