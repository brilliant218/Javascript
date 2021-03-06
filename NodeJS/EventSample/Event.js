//如果通过VSCode调试NodeJS, //js文件所在的文件夹中没有生成launch.json的话，需要先右键点击文件夹以vscode打开，并且生成launch.json的话，需要先右//键点击文件夹以vscode打开，并且生成launch
var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connect', ()=>{
    console.log('got connect event');
    eventEmitter.emit('data-received', "Hello World!");
});
eventEmitter.on('data-received', (data)=>{
    console.log('got data:' + data);
});
eventEmitter.emit('connect');

var n = 5;
eventEmitter.addListener('cutstom-event-for-addListener', (data)=>{
    console.log(data);
});
setInterval((data)=>{
    try {
        if(n > 0){
            eventEmitter.emit('cutstom-event-for-addListener',data);
            n--;       
        }
        else {
            eventEmitter.removeListener('cutstom-event-for-addListener');
            //also could use removeAllListener() to remove all lisenters
        }
    } catch (error) {
        console.log(error);
    }
}, 1000, 'this event suppose to trigger only five times');

eventEmitter.once('interval-event_response_once', (data)=>{
    console.log(data);
});
setInterval((data)=>{
    eventEmitter.emit('interval-event_response_once',data);
}, 1000, 'this event suppose to callback only once');

eventEmitter.on('custom-event', (data)=>{
    console.log(data);
});
setTimeout((data)=>{
    eventEmitter.emit('custom-event', data);
}, 1000, 'get custom timeout event');

eventEmitter.on('interval-event', (data)=>{
    console.log(data);
});
setInterval((data)=>{
    eventEmitter.emit('interval-event', data);
}, 1000, 'get interval event');

//'error' is specail event, no need to call on() before
eventEmitter.emit('error');




