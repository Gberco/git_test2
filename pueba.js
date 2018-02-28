// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

var p = document.createElement("p");
p.style.color = "red";
p.textContent = "Im Red";

var h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'Im Blue';

var div = document.createElement('div');
var pDiv = document.createElement('p');
var h1Div = document.createElement('h1');
div.style.cssText = 'border-style: solid; border-width: 2px; background-color: pink;';
h1Div.textContent = 'I\'m a DIV';
pDiv.textContent = 'ME TOO';

div.appendChild(h1Div);
div.appendChild(pDiv);

var btn = document.querySelector('#btn');
//btn.onclick = () => { alert('apretaste el boton');}
btn.addEventListener('click', function(e){
  console.log(e.target.style.background = 'blue');
})


container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);