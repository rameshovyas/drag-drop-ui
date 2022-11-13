const containers = document.querySelectorAll(".container");
const draggables = document.querySelectorAll(".draggable");


//Adding event listeners
draggables.forEach(draggable => {
    //Add event while dragging
    draggable.addEventListener('dragstart', () =>{
        draggable.classList.add("dragging");
    });

    //Add event while dragging ends
    draggable.addEventListener('dragend', () =>{
        draggable.classList.remove("dragging");
    })
});


containers.forEach(container =>{
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable);
    })
})