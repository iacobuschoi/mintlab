const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const bottomContainer = document.querySelector('.bottom-container');

// const leftContainerWrap = document.querySelector('.left-container-wrap');
// const rightContainerWrap = document.querySelector('.right-container-wrap');
// const bottomContainerWrap = document.querySelector('.bottom-container-wrap');

// left -58
// right 34
// bottom 49
function setContainerPosition(l,r,b) {
    leftContainer.style.transform = `translateX(${-58 + l}%)`;
    rightContainer.style.transform = `translateX(${34 - r}%)`;
    bottomContainer.style.transform = `translateY(${49 - b}%)`;
}

leftContainer.addEventListener('mouseenter', ()=>{
    // console.log("left");
    setContainerPosition(30,-20,-2);
})
leftContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})

rightContainer.addEventListener('mouseenter', ()=>{
    // console.log("right");
    setContainerPosition(-5,20,-2);
})
rightContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})

bottomContainer.addEventListener('mouseenter', ()=>{
    // console.log("bottom");
    setContainerPosition(-5,-20,40);
})
bottomContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
})