
const carousel = document.querySelector('.container');
const items = Array.from(carousel.children);
const left = document.querySelector('.prev');
const right = document.querySelector('.next');
let per=0;
let current = document.querySelector('.current');
let next = current.nextElementSibling;
const width = items[0].getBoundingClientRect().width;
console.log(width)

console.log(current);
console.log(items.length);
for(let i=0;i<items.length;i++){
    items[i].style.left = width*i+'px';
}
function my(){
    current = document.querySelector('.current');
    next = current.nextElementSibling;
    if(per<100)
        per+=1;
    else
        per =0;
    if(per==30 || per==60|| per==95){
        current.classList.remove('current');
        next.classList.add('current');
    }
    
}
setInterval(my,600);

left.addEventListener('click', e=>{
    let prev = current.previousElementSibling;
    let move = prev.style.left;
    carousel.style.transform = 'translateX(-'+move+')';
    current.classList.remove('current');
    prev.classList.add('current');
});

right.addEventListener('click', e=>{
    console.log("clicked")
    let move = width;
    console.log(carousel.style.transform);
    carousel.style.transform = 'translateX(-'+ move +')';

    current.classList.remove('current');
    next.classList.add('current');
    left.classList.remove('deactive');
});