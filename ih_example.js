var node = document.createElement('li');
node
var text = document.createTextNode('JS is awesome!');
text
node.appendChild(text);
var week5List = document.querySelectorAll('ul')[9];
node.style.color = 'goldenrod';
node.style.fontSize = '20px';

node.ondblclick = function() {
  alert('Yeah double click!');
}

window.onresize = function () {
  alert("resized");
}
