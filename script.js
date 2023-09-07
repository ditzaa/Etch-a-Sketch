const container = document.querySelector('#squares-container');

for(i=0; i<16; i++){
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('line-container');
    container.appendChild(lineContainer);
    for(j=0; j<16; j++){
        const square = document.createElement('div');
        square.classList.add('content');

        lineContainer.appendChild(square);
    }
}

