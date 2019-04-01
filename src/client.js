const readline = require('readline');
const dgram = require('dgram');

const socket = dgram.createSocket('udp4');
socket.bind(function () {

});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (line) {
    console.log('您输入了：' + line);
    let msg = new Buffer(line);
    socket.send(msg, 0, msg.length, 6631, '127.0.0.1', function (err, bytes) {
        if (err) {
            console.log(`发送消息失败, error = ${err}`);
        } else {
            console.log(`发送消息成功, ${bytes}`);
        }
    })
});

rl.on('close', function () {
    process.exit();
});

console.log('client has started');
