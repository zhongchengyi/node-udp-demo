const readline = require('readline');
const dgram = require('dgram');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (line) {
    console.log('您输入了：' + line);
});

rl.on('close', function () {
    process.exit();
});

const socket = dgram.createSocket('udp4');
socket.on('error', function (err) {
    console.log('server error ' + err.stack);
    socket.close();
});

socket.on('message', function (msg, remote) {
    console.log(`server recv message: ${msg}, \n\t from ${remote.address} : ${remote.port}`);
});

socket.on('listening', function () {
    const addr = socket.address();
    console.log(`server listening -  ${addr.address} : ${addr.port}`);
})

socket.bind(6631);

console.info('server has started');
