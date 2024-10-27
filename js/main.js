const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const bottomContainer = document.querySelector('.bottom-container');

const leftContainerWrap = document.querySelector('.left-container-wrap');
const rightContainerWrap = document.querySelector('.right-container-wrap');
const bottomContainerWrap = document.querySelector('.bottom-container-wrap');

// left -76
// right 45
// bottom 65
function setContainerPosition(l,r,b) {
    leftContainerWrap.style.transform = `translateX(${-76 + l}%)`;
    rightContainerWrap.style.transform = `translateX(${45 - r}%)`;
    bottomContainerWrap.style.transform = `translateY(${65 - b}%)`;
}

leftContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(30,-20,-2);
})
leftContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})

rightContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(-5,20,-2);
})
rightContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})

bottomContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(-5,-20,40);
})
bottomContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})