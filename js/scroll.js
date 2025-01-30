const HIDDEN_CLASSNAME = "hidden";
const SHOWN_CLASSNAME = "shown";

const topBar = document.querySelector(".top-bar");

let beforeScrollY = [];

const handleTopBar = (useClassName, unuseClassName) => {
  topBar.classList.add(useClassName);
  topBar.classList.remove(unuseClassName);
};

window.addEventListener("scroll", () => {
  if (window.scrollY > topBar.offsetHeight) {
    if (beforeScrollY.pop() < window.scrollY) {
      handleTopBar(HIDDEN_CLASSNAME, SHOWN_CLASSNAME);
      handleTopBarSide(HIDDEN_CLASSNAME, SHOWN_CLASSNAME);
    } else {
      handleTopBar(SHOWN_CLASSNAME, HIDDEN_CLASSNAME);
    }
    beforeScrollY.push(window.scrollY);
  }
});