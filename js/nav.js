const topBarNav = document.querySelector('.top-bar-nav');
const logo = document.querySelector('.logo');
const gap = 100;
const navGapPx = getComputedStyle(document.getElementsByClassName('top-bar-nav')[0]).gap;
const navGap = Number(navGapPx.substring(0,navGapPx.length-2))
const deletedItem = [];
const deletedGap = [];

function gapDetected() {
    return window.innerWidth - logo.offsetWidth - topBarNav.offsetWidth > gap? false: true;
}

function resizeEvent() {
    while(gapDetected()) {
        if(document.querySelector('.top-bar-nav-item')){
            deletedItem.push(topBarNav.firstElementChild);
            deletedGap.push(topBarNav.firstElementChild.offsetWidth);
            topBarNav.removeChild(topBarNav.firstElementChild);
        }
    }
    while(deletedItem.length > 0 && window.innerWidth - logo.offsetWidth - topBarNav.offsetWidth > navGap + gap + deletedGap[deletedGap.length-1]){
        topBarNav.insertBefore(deletedItem.pop(), topBarNav.firstChild);
        deletedGap.pop();
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