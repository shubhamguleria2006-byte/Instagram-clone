const inputAnimated1 = document.getElementsByClassName("input-animated")[0];
const inputAnimated2 = document.getElementsByClassName("input-animated")[1];

const p1 = document.getElementsByClassName("input-animated-p")[0];
const p2 = document.getElementsByClassName("input-animated-p")[1];

const className = "animate";

inputAnimated1.addEventListener("click",()=>{
    p1.classList.add(className);
})

inputAnimated2.addEventListener("click",()=>{
    p2.classList.add(className);
})