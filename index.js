function shout(string) {
  
  return string.toUpperCase()
  
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper(string) {
  return console.log(string.toLowerCase())
}

var uppercase = "YES INDEED!";
var lowercase = "I can't hear you!";

function sayHiToGrandma(string) {
  
  if(string.toLowerCase() === lowercase) {
  return "I can't hear you!"
  }
  
   if(string.toUpperCase() === uppercase) {
  return "YES INDEED!"
  }
}
