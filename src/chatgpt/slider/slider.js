const rowSliders = document.querySelectorAll( ".row-slider" );
const columnSliders = document.querySelectorAll( ".column-slider" );
const gridCells = document.querySelectorAll( ".grid-cell" );

rowSliders.forEach( ( slider, index ) => {
    slider.addEventListener( "input", () => {
        const rows = document.querySelectorAll( ".grid-row" );
        rows[ index ].style.height = `${slider.value}px`;
    });
});

columnSliders.forEach( ( slider, index ) => {
    slider.addEventListener( "input", () => {
        gridCells.forEach( ( cell ) => {
                cell.style.width = slider.value + "px";
        });
    });
});
