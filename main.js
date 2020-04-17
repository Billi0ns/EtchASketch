const buttons = document.querySelector('#buttons');
const container = document.querySelector('#container');
container.style.border = 'solid 2px #CDCDCD'

// Create three buttons 
let blackBtn = document.createElement('button');
buttons.appendChild(blackBtn);
let resetBtn = document.createElement('button');
buttons.appendChild(resetBtn);
let colorBtn = document.createElement('button');
buttons.appendChild(colorBtn);

// Style the buttons container
buttons.style.display = 'flex';
buttons.style.justifyContent = 'center';

// Style blackBtn
blackBtn.style.width = '10%';
blackBtn.style.height = '50px';
blackBtn.style.margin = '10px';
blackBtn.textContent = 'Black Grids';

blackBtn.addEventListener('click', (e) => {
  e.preventDefault();
  blackMode = true;
  changeColor(blackMode);
  clearGrids();
  createGrids(num);
  styleGrids(num);
})

// Style the button
resetBtn.style.width = '10%';
resetBtn.style.height = '50px';
resetBtn.style.margin = '10px';
resetBtn.textContent = 'Reset Grid';

resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  num = prompt('How many squares per side for the new grid?');
  clearGrids();
  createGrids(num);
  styleGrids(num);
})

// Style colorBtn
colorBtn.style.width = '10%';
colorBtn.style.height = '50px';
colorBtn.style.margin = '10px';
colorBtn.textContent = 'Colorful Grids';

colorBtn.addEventListener('click', (e) => {
  e.preventDefault();
  blackMode = false;
  changeColor(blackMode);
  clearGrids();
  createGrids(num);
  styleGrids(num);
})

// Clear Grids
function clearGrids() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Create divs for the grids
let num = 16;
function createGrids(num) {
  for (let i = 0; i < num*num; i++){
    let div = document.createElement('div');
    container.appendChild(div);
    div.style.border = 'solid 1px #CDCDCD';
  }
}

let blackMode = true;
// Create a grid
function styleGrids(num) {
  container.style.margin = '0 auto';
  container.style.width = '50%';
  container.style.display = 'grid';

  let gridLength = `${632 / num}px`;
  container.style.grid = `repeat(${num}, ${gridLength}) / auto-flow ${gridLength}`;

  // Set attribues to all cells in the grid
  changeColor(blackMode);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeColor(blackMode) {
  let divs = document.querySelectorAll('#container > div');
  if (blackMode) {
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor = 'white';
      divs[i].addEventListener('mouseover',(e) => moreBlack(e));
    }
  } else {
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor = 'white';
      divs[i].addEventListener('mouseover',(e) => e.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}`);
    }
  }
}

function moreBlack(e) {
  if (e.target.style.backgroundColor === 'white') {
    e.target.blackAlpha = 0.1;
  } else {
    e.target.blackAlpha += 0.1;
  }
  e.target.style.backgroundColor = `rgba(0,0,0,${e.target.blackAlpha})`;
}

createGrids(num);
styleGrids(num);
