let imagenslist = [
    'download (1).jpeg',
    'download (2).jpeg',
    'download (3).jpeg',
    'download (4).jpeg',
    'download.jpeg'
]

let counter = 0;
function setImagem() {
    img.setAttribute('src', imagenslist[counter])
}

let corpo = document.querySelector('body');

let before = document.createElement('h1')
let beforeNext = document.createTextNode('<')
before.appendChild(beforeNext);

let img = document.createElement('img');

let next = document.createElement('h1')
let nextNext = document.createTextNode('>')
next.appendChild(nextNext);

function init() {
    corpo.appendChild(before);
    corpo.appendChild(img);
    corpo.appendChild(next);
}; 

before.addEventListener('click', function() {
    if(counter > 0) {
        counter = counter - 1;
    }else {
        counter = 4
    }
    setImagem()
});

next.addEventListener('click', function() {
    if(counter < 4) {
        counter = counter + 1;
    }else{
        counter = 0;
    }
    setImagem()
});

init();