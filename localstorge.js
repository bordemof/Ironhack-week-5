window.localStorage.setItem("key", "value");

window.localStorage.getItem("key");

window.localStorage.removeItem("key");


window.localStorage.setItem("Object",JSON.stringify({example: 'Hey'}));
var jsonifiedPostion = JSON.parse(window.localStorage.getItem("Object"));
console.log(jsonifiedPostion.latitude);