function shout(str){
    return str.toUpperCase();
}
shout('hello');

function whisper(str){
    return str.toLowerCase();
}
whisper('HELLO');

function logShout(str){
    console.log(str.toUpperCase())
}
whisper('hello');

function logWhisper(str){
    console.log(str.toLowerCase());
}
logWhisper('HELLO');

function sayHiToHeadphonedRoommate(str){
    return str === str.toLowerCase() ? "I can't hear you!" : str === "Let's have dinner together!" ? "I would love to!" :"YES INDEED!";
}
sayHiToHeadphonedRoommate('hello');