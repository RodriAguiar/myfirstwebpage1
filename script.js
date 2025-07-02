/*
let nome = 'João'
let idade = 17
console.log(` Olá, ${nome}! tens ${idade} anos. `);
*/

/*
document.getElementById('bot1').addEventListener('click', () => {
    document.getElementById('msg1').innerText = 'Olá Mundo';
    document.getElementById('msg2').innerText = 'Olá Mundo';
});
*/

const newDiv = document.createElement('div');
newDiv.id = 'div';
document.body.appendChild(newDiv);

const newButton = document.createElement('button');
newButton.textContent = 'Click para apagar';
document.getElementById('div').appendChild(newButton);
newButton.id = 'bot2'

document.getElementById('bot2').addEventListener('click', () => {
    document.getElementById('bot2').style.display='none';
});

document.getElementById('h001').style.color = 'blue';

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(() =>myResolve (document.getElementById('h001').innerText = 'Olá Mundo'),5000);
    });

    myPromise.then(console.log);