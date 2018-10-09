var reader = require("fs");
reader.readFile("input.txt", (err,data)=>{
    if(err){
        console.log(err.code);
        console.log(err.errno);
        console.log(err.message);
        console.log(err.name);
        console.log(err.path);
        console.log(err.stack);
        console.log(err.syscall);
    }
    console.log('read file content as below:' + data);
});
