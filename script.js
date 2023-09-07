const container = document.querySelector('#squares-container');
const mainContainer = document.querySelector('#main-container');

const changeButton = document.querySelector('#change-grid-button');
// container.append(changeButton);

for(i=0; i<16; i++){
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('line-container');
    container.appendChild(lineContainer);
    for(j=0; j<16; j++){
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            //alert("Hello World");
            square.style.cssText = "background-color: blue;"
          });

        lineContainer.appendChild(square);
    }
}




