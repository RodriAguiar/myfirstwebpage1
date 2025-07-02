document.body.style.backgroundColor = '#ffffff';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.margin = '30px';
document.body.style.padding = '0px';
document.body.style.border = '#a3a2a2 solid 1px';
document.body.style.borderRadius = '5px';


//header
const header1 = document.createElement('header');
document.body.appendChild(header1);
header1.id = 'header1';

document.getElementById('header1').style.border = '#a3a2a2 solid 1px';
document.getElementById('header1').style.display = 'flex';
document.getElementById('header1').style.justifyContent = 'center';
document.getElementById('header1').style.alignItems = 'center';
document.getElementById('header1').style.backgroundColor = '#d9d9d966'
document.getElementById('header1').style.color = 'rgb(0, 0, 0)';
document.getElementById('header1').style.height = '100px';

const h001 = document.createElement('h1');
h001.textContent = 'HEADER';
h001.id = 'h001'
document.getElementById('header1').appendChild(h001);

document.getElementById('h001').style.fontSize = '3em';
document.getElementById('h001').style.fontWeight = 'bold';

//navigation
const nav = document.createElement('nav');
document.body.appendChild(nav);
nav.id = 'nav';

document.getElementById('nav').style.display = 'flex';
document.getElementById('nav').style.justifyContent = 'center';
document.getElementById('nav').style.alignContent = 'center';
document.getElementById('nav').style.backgroundColor = '#3b3a3a';
document.getElementById('nav').style.color = 'rgb(255, 255, 255)';
document.getElementById('nav').style.height = '50px';

const div001 = document.createElement('div');
div001.textContent = 'HOME';
div001.id = 'div001';
document.getElementById('nav').appendChild(div001);

document.getElementById('div001').style.width = '25%';
document.getElementById('div001').style.textAlign = 'center';
document.getElementById('div001').style.padding = '10px';
document.getElementById('div001').style.fontSize = '1.5em';
document.getElementById('div001').style.fontWeight = 'bold';

const div002 = document.createElement('div');
div002.textContent = 'ABOUT';
div002.id = 'div002';
document.getElementById('nav').appendChild(div002);

document.getElementById('div002').style.width = '25%';
document.getElementById('div002').style.textAlign = 'center';
document.getElementById('div002').style.padding = '10px';
document.getElementById('div002').style.fontSize = '1.5em';
document.getElementById('div002').style.fontWeight = 'bold';

const div003 = document.createElement('div');
div003.textContent = 'SERVICE';
div003.id = 'div003';
document.getElementById('nav').appendChild(div003);

document.getElementById('div003').style.width = '25%';
document.getElementById('div003').style.textAlign = 'center';
document.getElementById('div003').style.padding = '10px';
document.getElementById('div003').style.fontSize = '1.5em';
document.getElementById('div003').style.fontWeight = 'bold';

const div004 = document.createElement('div');
div004.textContent = 'HOME';
div004.id = 'div004';
document.getElementById('nav').appendChild(div004);

document.getElementById('div004').style.width = '25%';
document.getElementById('div004').style.textAlign = 'center';
document.getElementById('div004').style.padding = '10px';
document.getElementById('div004').style.fontSize = '1.5em';
document.getElementById('div004').style.fontWeight = 'bold';

//Main
const main = document.createElement('main');
document.body.appendChild(main);
main.id = 'main';

document.getElementById('main').style.display = 'flex';
document.getElementById('main').style.justifyContent = 'center';
document.getElementById('main').style.alignItems = 'center';
document.getElementById('main').style.backgroundColor = 'ffffff';
document.getElementById('main').style.height = '400px';
document.getElementById('main').style.padding = '10px';

const fotospace = document.createElement('section');
document.getElementById('main').appendChild(fotospace);
fotospace.id = 'fotospace';

document.getElementById('fotospace').style.display = 'flex';
document.getElementById('fotospace').style.justifyContent = 'center';
document.getElementById('fotospace').style.alignItems = 'center';
document.getElementById('fotospace').style.backgroundColor = '#9ad3e866';
document.getElementById('fotospace').style.width = '70%';
document.getElementById('fotospace').style.height = '100%';


const h1fotospace = document.createElement('h1');
h1fotospace.textContent = 'IMAGE';
h1fotospace.id = 'h1fotospace';
document.getElementById('fotospace').appendChild(h1fotospace);

document.getElementById('h1fotospace').style.fontSize = '2.5em';

//newscard
const newscardcontainer = document.createElement('section');
document.getElementById('main').appendChild(newscardcontainer);
newscardcontainer.id = 'newscardcontainer';

document.getElementById('newscardcontainer').style.display = 'flex';
document.getElementById('newscardcontainer').style.flexDirection = 'column';
document.getElementById('newscardcontainer').style.alignItems = 'center';
document.getElementById('newscardcontainer').style.justifyContent = 'center';
document.getElementById('newscardcontainer').style.padding = '0px 0px 0px 10px';

//news card 1
const newscard001 = document.createElement('div');
newscard001.id = 'newscard001';
document.getElementById('newscardcontainer').appendChild(newscard001);

document.getElementById('newscard001').style.display = 'flex';
document.getElementById('newscard001').style.flexDirection = 'column';
document.getElementById('newscard001').style.justifyContent = 'center';
document.getElementById('newscard001').style.backgroundColor = 'white';
document.getElementById('newscard001').style.border = '#a3a2a2 solid 1px';
document.getElementById('newscard001').style.padding = '0 0 0 10px';
document.getElementById('newscard001').style.margin = '10px';
document.getElementById('newscard001').style.height = '30%';

const h2001 = document.createElement('h2');
h2001.textContent = 'TITLE';
h2001.id = 'h2001';
document.getElementById('newscard001').appendChild(h2001);

document.getElementById('h2001').style.fontSize = '2.5em';
document.getElementById('h2001').style.fontWeight = 'bold';
document.getElementById('h2001').style.margin = '0';

const p001 = document.createElement('p');
p001.textContent = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.';
p001.id = 'p001';
document.getElementById('newscard001').appendChild(p001);

//news card 2
const newscard002 = document.createElement('div');
newscard002.id = 'newscard002';
document.getElementById('newscardcontainer').appendChild(newscard002);

document.getElementById('newscard002').style.display = 'flex';
document.getElementById('newscard002').style.flexDirection = 'column';
document.getElementById('newscard002').style.justifyContent = 'center';
document.getElementById('newscard002').style.backgroundColor = 'white';
document.getElementById('newscard002').style.border = '#a3a2a2 solid 1px';
document.getElementById('newscard002').style.padding = '0 0 0 10px';
document.getElementById('newscard002').style.margin = '10px';
document.getElementById('newscard002').style.height = '30%';

const h2002 = document.createElement('h2');
h2002.textContent = 'TITLE';
h2002.id = 'h2002';
document.getElementById('newscard002').appendChild(h2002);

document.getElementById('h2002').style.fontSize = '2.5em';
document.getElementById('h2002').style.fontWeight = 'bold';
document.getElementById('h2002').style.margin = '0';

const p002 = document.createElement('p');
p002.textContent = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.';
p002.id = 'p002';
document.getElementById('newscard002').appendChild(p002);

//news card 3

const newscard003 = document.createElement('div');
newscard003.id = 'newscard003';
document.getElementById('newscardcontainer').appendChild(newscard003);

document.getElementById('newscard003').style.display = 'flex';
document.getElementById('newscard003').style.flexDirection = 'column';
document.getElementById('newscard003').style.justifyContent = 'center';
document.getElementById('newscard003').style.backgroundColor = 'white';
document.getElementById('newscard003').style.border = '#a3a2a2 solid 1px';
document.getElementById('newscard003').style.padding = '0 0 0 10px';
document.getElementById('newscard003').style.margin = '10px';
document.getElementById('newscard003').style.height = '30%';

const h2003 = document.createElement('h2');
h2003.textContent = 'TITLE';
h2003.id = 'h2003';
document.getElementById('newscard003').appendChild(h2003);

document.getElementById('h2003').style.fontSize = '2.5em';
document.getElementById('h2003').style.fontWeight = 'bold';
document.getElementById('h2003').style.margin = '0';

const p003 = document.createElement('p');
p003.textContent = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec leo.';
p003.id = 'p003';
document.getElementById('newscard003').appendChild(p003);

//footer
const header2 = document.createElement('header');
document.body.appendChild(header2);
header2.id = 'header2';

document.getElementById('header2').style.border = '#a3a2a2 solid 1px';
document.getElementById('header2').style.display = 'flex';
document.getElementById('header2').style.justifyContent = 'center';
document.getElementById('header2').style.alignItems = 'center';
document.getElementById('header2').style.backgroundColor = '#d9d9d966'
document.getElementById('header2').style.color = 'rgb(0, 0, 0)';
document.getElementById('header2').style.height = '100px';

const h002 = document.createElement('h1');
h002.textContent = 'FOOTER';
h002.id = 'h002'
document.getElementById('header2').appendChild(h002);

document.getElementById('h002').style.fontSize = '3em';
document.getElementById('h002').style.fontWeight = 'bold';