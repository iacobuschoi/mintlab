const topBarNav = document.querySelector('.top-bar-nav');
const logo = document.querySelector('.logo');
const topBarOption = document.querySelector('.top-bar-option');
const topBarSide = document.querySelector('.top-bar-side');
const gap = 100;
const navGapPx = getComputedStyle(document.getElementsByClassName('top-bar-nav')[0]).gap;
const navGap = Number(navGapPx.substring(0,navGapPx.length-2))
const deletedItem = [];
const deletedGap = [];
topBarSideOn = false;

function gapDetected() {
    return window.innerWidth - logo.offsetWidth - topBarNav.offsetWidth > gap? false: true;
}

function resizeEvent() {
    while(gapDetected()) {
        if(document.querySelector('.top-bar-nav-item')){
            deletedItem.push(topBarNav.firstElementChild);
            deletedGap.push(topBarNav.firstElementChild.offsetWidth);
            topBarSide.insertBefore(topBarNav.firstElementChild, topBarSide.firstChild);
            // topBarNav.removeChild(topBarNav.firstElementChild);
        }
    }
    while(deletedItem.length > 0 && window.innerWidth - logo.offsetWidth - topBarNav.offsetWidth > navGap + gap + deletedGap[deletedGap.length-1]){
        topBarNav.insertBefore(topBarSide.firstElementChild, topBarNav.firstChild);
        // topBarSide.removeChild(topBarSide.firstElementChild);
        deletedItem.pop();
        deletedGap.pop();
    }
    if(deletedItem.length){
        topBarOption.style.display = 'flex';
    }
    else{
        topBarOption.style.display = 'none';
    }
}

window.addEventListener('resize',()=>{
    // console.log();
    resizeEvent();
})

window.onload = function(){
    resizeEvent();
}

let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

setInterval(() => {
    resizeEvent();
}, 500);

const handleTopBarSide = (useClassName, unuseClassName) => {
    topBarSide.classList.add(useClassName);
    topBarSide.classList.remove(unuseClassName);
    if(useClassName==SHOWN_CLASSNAME) topBarSideOn=true;
    else topBarSideOn=false;
};

topBarOption.addEventListener('mouseenter',()=>{
    handleTopBarSide(SHOWN_CLASSNAME, HIDDEN_CLASSNAME);
})

topBarSideFlag = false;
topBarSide.addEventListener('mouseenter',()=>{
    console.log("true");
    topBarSideFlag=true;
})
topBarSide.addEventListener('mouseleave',()=>{
    topBarSideFlag=false;
    handleTopBarSide(HIDDEN_CLASSNAME, SHOWN_CLASSNAME);
})
topBarOption.addEventListener('mouseleave',()=>{
    setTimeout(() => {
        if(!topBarSideFlag) handleTopBarSide(HIDDEN_CLASSNAME, SHOWN_CLASSNAME);
    }, 500);
})

