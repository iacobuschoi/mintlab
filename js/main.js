const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const bottomContainer = document.querySelector('.bottom-container');
const leftContainerText = document.querySelector('.left-container-label-text');
const rightContainerText = document.querySelector('.right-container-label-text');
const bottomContainerText = document.querySelector('.bottom-container-label-text');
const topContainer = document.querySelector('.top-container');
const leftContainerImg = document.querySelector('.left-container-img');
const bottomContainerImg = document.querySelector('.bottom-container-img');
const rightContainerImg = document.querySelector('.right-container-img');
const MAIN_HIDDEN_CLASSNAME = "hidden";
const MAIN_SHOWN_CLASSNAME = "shown";
const MAIN_HIDDEN_TEXT_CLASSNAME = "hidden-text";

const rightContainerTextDescription = document.querySelector(".right-container-text");
const rightContainerTextTitle = document.querySelector(".right-container-text b");
const defaultRightContainerTextTitle = rightContainerTextTitle.innerText;
const defaultRightContainerTextDescription = rightContainerTextDescription.innerText.slice(defaultRightContainerTextTitle.length+1);
rightContainerTextDescription.classList.add(MAIN_HIDDEN_TEXT_CLASSNAME);
rightContainerTextDescription.innerHTML = "";

const bottomContainerTextDescription = document.querySelector(".bottom-container-text");
const bottomContainerTextTitle = document.querySelector(".bottom-container-text b");
const defaultBottomContainerTextTitle = bottomContainerTextTitle.innerText;
const defaultBottomContainerTextDescription = bottomContainerTextDescription.innerText.slice(defaultBottomContainerTextTitle.length+1);
bottomContainerTextDescription.classList.add(MAIN_HIDDEN_TEXT_CLASSNAME);
bottomContainerTextDescription.innerHTML = "";

const leftContainerTextDescription = document.querySelector(".left-container-text");
const leftContainerTextTitle = document.querySelector(".left-container-text b");
const defaultLeftContainerTextTitle = leftContainerTextTitle.innerText;
const defaultLeftContainerTextDescription = leftContainerTextDescription.innerText.slice(defaultLeftContainerTextTitle.length+1);
leftContainerTextDescription.classList.add(MAIN_HIDDEN_TEXT_CLASSNAME);
leftContainerTextDescription.innerHTML = "";

const textElements = [leftContainerTextDescription,bottomContainerTextDescription,rightContainerTextDescription];
const titles = [defaultLeftContainerTextTitle,defaultBottomContainerTextTitle,defaultRightContainerTextTitle];
const descriptions = [defaultLeftContainerTextDescription,defaultBottomContainerTextDescription,defaultRightContainerTextDescription];

// left -58
// right 34
// bottom 49

const handleClass = (element, useClassName, unuseClassName) => {
    if (useClassName in element.classList){}
    else{
        element.classList.add(useClassName);
    }
    if (unuseClassName in element.classList){}
    else{
        element.classList.remove(unuseClassName);
    }
};

function setContainerPosition(l,r,b) {
    leftContainer.style.transform = `translateX(${-58 + l}%)`;
    rightContainer.style.transform = `translateX(${34 - r}%)`;
    bottomContainer.style.transform = `translateY(${49 - b}%)`;
}

function setLabelText(l,r,b){
    if(l || r || b){
        if(l){
            topContainer.innerText = 'Intentions';
            handleClass(rightContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(bottomContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(leftContainerImg,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
            handleClass(bottomContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(rightContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            togOn(0);
        }
        if(b){
            topContainer.innerText = 'Kinematics, Kinetics';
            handleClass(rightContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(leftContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(leftContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(bottomContainerImg,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
            handleClass(rightContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            togOn(1);
        }
        if(r){
            topContainer.innerText = 'Actions, Activities';
            handleClass(leftContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(bottomContainerText,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(leftContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(bottomContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
            handleClass(rightContainerImg,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
            togOn(2);
        }
    }
    else{
        handleClass(rightContainerText,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
        handleClass(leftContainerText,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
        handleClass(bottomContainerText,MAIN_SHOWN_CLASSNAME,MAIN_HIDDEN_CLASSNAME);
        handleClass(leftContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
        handleClass(bottomContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
        handleClass(rightContainerImg,MAIN_HIDDEN_CLASSNAME,MAIN_SHOWN_CLASSNAME);
        togOn(4);
        topContainer.innerText = 'Human-Centered Robotic Intelligence';
    }
}
leftContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(30,-20,-2);
    setLabelText(1,0,0);
})
leftContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
    setLabelText(0,0,0);
})

rightContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(-5,20,-2);
    setLabelText(0,1,0);
})
rightContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
    setLabelText(0,0,0);
})

bottomContainer.addEventListener('mouseenter', ()=>{
    setContainerPosition(-5,-20,40);
    setLabelText(0,0,1);
})
bottomContainer.addEventListener('mouseleave',()=>{
    setContainerPosition(0,0,0);
    setLabelText(0,0,0);
})

let textIdxs = [0,0,0];
let typeTogs = [0,0,0];
function typing(element, text1, text2, speed = 50, elementIdx){
    function type(){
        if(typeTogs[elementIdx]==1 && textIdxs[elementIdx] < text1.length + text2.length){
            element.innerHTML = format(text1,text2,textIdxs[elementIdx]);
            textIdxs[elementIdx]++;
            setTimeout(type,speed);
        }
    }
    type()
}
function untyping(element, text1, text2, speed = 10, elementIdx){
    function untype(){
        if(typeTogs[elementIdx]==0 && textIdxs[elementIdx] >= 0){
            textIdxs[elementIdx]--;
            element.innerHTML = format(text1,text2,textIdxs[elementIdx]);
            setTimeout(untype,speed);
        }
    }
    untype()
}

function format(text1, text2, idx){
    if (idx==0){
        return "";
    }
    if (idx < text1.length) {
        return "<b>"+text1.slice(0,idx+1)+"</b>";
    }
    else{
        return "<b>"+text1+"</b><br>"+text2.slice(0,idx-text1.length+1)
    }
}

function togOn(elementIdx){
    for(i=0; i<3; i++){
        typeTogs[i]= i==elementIdx?1:0;
        if(i==elementIdx){
            typing(
                textElements[elementIdx],
                titles[elementIdx],
                descriptions[elementIdx],
                15,
                elementIdx
            );
            textElements[elementIdx].classList.remove(MAIN_HIDDEN_TEXT_CLASSNAME);
        }
        else{
            untyping(
                textElements[i],
                titles[i],
                descriptions[i],
                5,
                i
            );
        }
    }
}