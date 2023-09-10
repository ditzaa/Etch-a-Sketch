const mainContainer = document.querySelector('.main-container');
let container = document.querySelector('#squares-container');
//container.classList.add('square-container');

mainContainer.appendChild(container)

const changeButton = document.querySelector('#change-grid-button');

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
            square.style.cssText = "background-color: blue;"
            square.style.height = "30px";
            square.style.width = "30px";
          });

        lineContainer.appendChild(square);
    }
}

function changeSquareSize(squareSide){
    var element = document.getElementById("myDiv");
        element.style.height = "200px";
}

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
            //let divDim = container.style.width; 
            let newDim = (480/sideDimension).toString() + "px";
            square.style.height = newDim;
            square.style.width = newDim;
    
            square.addEventListener('mouseover', () => {
                square.style.cssText = "background-color: blue;"
                square.style.height = newDim;
                square.style.width = newDim;
              });
    
            lineContainer.appendChild(square);
        }
    }
}

changeButton.addEventListener('click', () =>{
    let sideDimension = prompt('Insert the number of squares per side: ', 1);
    while(sideDimension > 100 || sideDimension <0){
        sideDimension = prompt('Please select an integer between 1 and 100', 1);
    }

    changeDivSize(sideDimension);

})




