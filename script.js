const mainContainer = document.querySelector('.main-container');
let container = document.querySelector('#squares-container');
mainContainer.appendChild(container)
const changeButton = document.querySelector('#change-grid-button');
const randomColorButton = document.querySelector('#rgb-color-button');

for(i=0; i<16; i++){
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('line-container');
    container.appendChild(lineContainer);
    for(j=0; j<16; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = "30px";
        square.style.width = "30px";

        square.addEventListener('mouseover', () => {
            square.style.cssText = "background-color: black;"
            square.style.height = "30px";
            square.style.width = "30px";
          });

        lineContainer.appendChild(square);
    }
}

let sideDimension;
let newDim;
let newDimNb;
let newSideDimension;

function changeDivSize(sideDimension){
    container.remove();

    container = document.createElement('div');
    container.classList.add('square-container');
    mainContainer.appendChild(container);

    for(i=0; i<sideDimension; i++){
        const lineContainer = document.createElement('div');
        lineContainer.classList.add('line-container');
        container.appendChild(lineContainer);
        for(j=0; j<sideDimension; j++){
            const square = document.createElement('div');
            square.classList.add('square');

            //change square side dimension 
            newDim = (480/sideDimension).toString() + "px";
            newSideDimension = sideDimension;
            newDimNb = newDim;
            square.style.height = newDim;
            square.style.width = newDim;
    
            square.addEventListener('mouseover', () => {
                square.style.cssText = "background-color: black;"
                square.style.height = newDim;
                square.style.width = newDim;
              });
    
            lineContainer.appendChild(square);
        }
    }
}

changeButton.addEventListener('click', () =>{
    sideDimension = prompt('Select pen size (1-100): ', 1);
    while(sideDimension > 100 || sideDimension <0 || isNaN(sideDimension)){
        sideDimension = prompt('Please select a number between 1 and 100', 1);
    }

    changeDivSize(sideDimension);
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

randomColorButton.addEventListener('click', () =>{
    const pixels = document.querySelectorAll(".square");
    pixels.forEach(pixel => {
        

        pixel.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            pixel.style.backgroundColor = randomColor;

            });
      });
})
