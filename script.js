const mainContainer = document.querySelector('.main-container');
let container = document.querySelector('#squares-container');

const changeButton = document.querySelector('#change-grid-button');

for(i=0; i<16; i++){
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('line-container');
    container.appendChild(lineContainer);
    for(j=0; j<16; j++){
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            square.style.cssText = "background-color: blue;"
          });

        lineContainer.appendChild(square);
    }
}

function changeDivSize(sideDimension){
    container.remove();

    const newContainer = document.createElement('div');
    newContainer.classList.add('new-container');
    //mainContainer.appendChild(newContainer);

    for(i=0; i<sideDimension; i++){
        const lineContainer = document.createElement('div');
        lineContainer.classList.add('line-container');
        newContainer.appendChild(lineContainer);
        for(j=0; j<sideDimension; j++){
            const square = document.createElement('div');
            square.classList.add('square');
    
            square.addEventListener('mouseover', () => {
                square.style.cssText = "background-color: blue;"
              });
    
            lineContainer.appendChild(square);
        }
    }

    mainContainer.appendChild(newContainer);

}

changeButton.addEventListener('click', () =>{
    let sideDimension = prompt('Insert the number of squares per side: ', 1);
    while(sideDimension > 100 || sideDimension <0){
        sideDimension = prompt('Please select an integer between 1 and 100', 1);
    }

    changeDivSize(sideDimension);

})




