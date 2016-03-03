var socket = new WebSockect('ws://localhost:8080');
socket.addEventListener('open', function(){
    console.log("Connection established, handle with event");
});
socket.onopen = function(){
    console.log("Connection established, handle with function");
};

socket.onmessage = function(event){
    console.log("Message received ", event.data);
};
socket.send()
socket.close();