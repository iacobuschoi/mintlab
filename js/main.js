const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const bottomContainer = document.querySelector('.bottom-container');
const leftContainerText = document.querySelector('.left-container-label-text');
const rightContainerText = document.querySelector('.right-container-label-text');
const bottomContainerText = document.querySelector('.bottom-container-label-text');
const topContainer = document.querySelector('.top-container');
const MAIN_HIDDEN_CLASSNAME = "hidden";
const MAIN_SHOWN_CLASSNAME = "shown";

// const leftContainerWrap = document.querySelector('.left-container-wrap');
// const rightContainerWrap = document.querySelector('.right-container-wrap');
// const bottomContainerWrap = document.querySelector('.bottom-container-wrap');

// left -58
// right 34
// bottom 49
const handleClass = (element, useClassName, unuseClassName) => {
    element.classList.add(useClassName);
    element.classList.remove(unuseClassName);
};

function setContainerPosition(l,r,b) {
    leftContainer.style.transform = `translateX(${-58 + l}%)`;
    rightContainer.style.transform = `translateX(${34 - r}%)`;
    bottomContainer.style.transform = `translateY(${49 - b}%)`;
}

function setLabelText(l,r,b){
    if(l || r || b){
        handleClass(rightContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
        handleClass(leftContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
        handleClass(bottomContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
        if(l){
            topContainer.innerText = 'Intentions';
        }
        if(r){
            topContainer.innerText = 'Actions, Activities';
        }
        if(b){
            topContainer.innerText = 'Kinematics, Kinetics';
        }
    }
    else{
        handleClass(rightContainerText,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
        handleClass(leftContainerText,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
        handleClass(bottomContainerText,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
        topContainer.innerText = 'Human-Centered Robotic Intelligence';
    }
}
leftContainer.addEventListener('mouseenter', ()=>{
    // console.log("left");
    setContainerPosition(30,-20,-2);
    setLabelText(1,0,0);
})
leftContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
    setLabelText(0,0,0);
})

rightContainer.addEventListener('mouseenter', ()=>{
    // console.log("right");
    setContainerPosition(-5,20,-2);
    setLabelText(0,1,0);
})
rightContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
    setLabelText(0,0,0);
})

bottomContainer.addEventListener('mouseenter', ()=>{
    // console.log("bottom");
    setContainerPosition(-5,-20,40);
    setLabelText(0,0,1);
})
bottomContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
    setLabelText(0,0,0);
})