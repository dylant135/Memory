let arr = [{
    name: 'burger',
    img: 'img/burger.png'
},
{
    name: 'chicken',
    img: 'img/chicken.png'
},
{
    name: 'donut',
    img: 'img/donut.png'
},
{
    name: 'egg',
    img: 'img/egg.png'
},
{
    name: 'fries',
    img: 'img/fries.png'
},
{
    name: 'hotdog',
    img: 'img/hotdog.png'
},
{
    name: 'icecream',
    img: 'img/icecream.png'
},
{
    name: 'pizza',
    img: 'img/pizza.png'
},
{
    name: 'burger',
    img: 'img/burger.png'
},
{
    name: 'chicken',
    img: 'img/chicken.png'
},
{
    name: 'donut',
    img: 'img/donut.png'
},
{
    name: 'egg',
    img: 'img/egg.png'
},
{
    name: 'fries',
    img: 'img/fries.png'
},
{
    name: 'hotdog',
    img: 'img/hotdog.png'
},
{
    name: 'icecream',
    img: 'img/icecream.png'
},
{
    name: 'pizza',
    img: 'img/pizza.png'
}
]

arr.sort(() => 0.5 - Math.random());

let newArr = [];
let myArr = [];
let score = 0;
let time = 30;
let interval;
const dtime = document.getElementById('time');
const dscore = document.getElementById('score');
const startbtn = document.getElementById('start');


startbtn.addEventListener('click', start);
function start() {
    createBoard();
    startbtn.style.display = 'none';
    dscore.style.display = 'block';
    dtime.style.display = 'block';
    interval = setInterval(update, 1000);
}

function update() {
    time--;
    dtime.innerHTML = 'Time: ' + time;
    if(time <= 0) {
        container.style.display = 'none';
        dtime.style.display = 'none';
        dscore.style.fontSize = '2em';
    }
}

//create board
const container = document.getElementById('container');
function createBoard() {
    for(let i = 0; i < 16; i++) {
        const cell = document.createElement('img');
        cell.setAttribute('src', 'img/question.png');
        cell.setAttribute('data-id', i);
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('click', select);
    }
}

function select(e) {
    if(this.classList[1] == 'flipped') {
        return;
    }
    this.classList.add('flipped');
    let target = e.target;
    myArr.push(target);
    let t = this.getAttribute('data-id');
    this.setAttribute('src', arr[t].img);
    let n = arr[t].name;
    newArr.push(n);
    if(newArr.length === 2) {
        setTimeout(check, 600);
    }
}

function check() {
    if (newArr[0] === newArr[1]) {
        score++;
        dscore.innerHTML = 'Score: ' + score;
        myArr[0].setAttribute('src', 'img/white.png');
        myArr[1].setAttribute('src', 'img/white.png');
        myArr[0].style.border = 'none';
        myArr[1].style.border = 'none';
        myArr[0].style.pointerEvents = 'none';
        myArr[1].style.pointerEvents = 'none';
    } else {
        myArr[0].setAttribute('src', 'img/question.png');
        myArr[1].setAttribute('src', 'img/question.png');
        myArr[0].classList.remove('flipped');
        myArr[1].classList.remove('flipped');
    }
    newArr = [];
    myArr = [];
}