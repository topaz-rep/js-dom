const link = document.querySelector('a');
link.textContent = 'Google Search';
link.href = 'https://google.com';

const sect = document.querySelector('section');


//for (let i = 1; i <= 10; i++) {
// [...Array(1000)].forEach( (_, i) => {
//     const para = document.createElement('p');
//     para.textContent = i+' We hope you enjoyed the ride.';
//     sect.appendChild(para);
// })

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

$('.click-me').click( () => $('img').toggle(3000) );

const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.value = eval(display.value);
}