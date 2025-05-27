import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("message", (name, text)=>{
    console.log(`${name} ${text}`);
    
})

function sendMessage (name, text, emitterIntence){
    emitterIntence.emit("message", name, text);
}

sendMessage("Yulia", "Hi", emitter)
sendMessage("Roma", "Hi", emitter)
sendMessage("Serhii", "Hi", emitter)