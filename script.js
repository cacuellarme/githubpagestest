let btn = document.getElementById('boton-hamburgesa');
let cue = document.querySelector(".menu");
let cue2 = document.querySelector(".menu-burguesa");

btn.addEventListener("click",agregar);

function agregar(){
    cue.classList.toggle("cambio");
    cue2.classList.toggle("coco");
    
}

/*========================*/ 

