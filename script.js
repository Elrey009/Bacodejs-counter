const themeBtn = document.querySelector(".theme-btn");
const mainContainerBorder = document.querySelector(".main-container");
const body = document.querySelector("body");
const hrBorder = document.querySelector(".hr");
const btnBorder = document.querySelectorAll(".btn");
const themeColor = document.querySelector(".theme-color");
const textColor = document.querySelectorAll(".text");
const placeholder = document.querySelector(".input-container ");
const repeatDisplay = document.querySelector(".repeat-display");

const themeData = {
  dark: {
    themeBtnBorder: "1px dotted var(--bg-white)",
    ctnBorder: "2px solid var(--bg-white)",
    themeDataBg: "var(--bg-white)",
    textColorColor: "var(--text-white)",
    bodyStyleBg: "var(--text-black)",
    hrStyleBorder: "2px solid var(--bg-white)",
    btnBorder2: "1px solid var(--border-blue)",
    inputContainerBg: "black",
    placeholderColor: "var(--text-white)",
    repeatDisplayColor: "#39f",
  },
  light: {
    themeBtnBorder: "1px dotted var(--bg-black)",
    ctnBorder: "2px solid var(--bg-black)",
    themeDataBg: "var(--bg-black)",
    textColorColor: "var(--text-black)",
    bodyStyleBg: "var(--text-white)",
    hrStyleBorder: "1px solid var(--bg-black)",
    btnBorder2: "2px solid var(--border-green)",
    inputContainerBg: "white",
    placeholderColor: "var(--text-black)",
    repeatDisplayColor: "#008000",
  },
};

var currentMode = "light";

const themeChanger = () => {
  // Toggle BG state
  const previousMode = currentMode;
  currentMode == "light" ? (currentMode = "dark") : (currentMode = "light");

  const theme = themeData[currentMode];

  themeBtn.style.border = theme.themeBtnBorder;
  mainContainerBorder.style.border = theme.ctnBorder;
  repeatDisplay.style.border = theme.ctnBorder;
  repeatDisplay.style.color = theme.repeatDisplayColor;
  themeColor.style.backgroundColor = theme.themeDataBg;
  textColor.forEach((element, index) => {
    element.style.color = theme.textColorColor;
  });
  body.style.backgroundColor = theme.bodyStyleBg;
  hrBorder.style.border = theme.hrStyleBorder;
  placeholder.style.backgroundColor = theme.inputContainerBg;
  placeholder.style.color = theme.placeholderColor;
  btnBorder.forEach((elem, index) => {
    elem.style.border = theme.btnBorder2;
  });
  btnBorder.forEach((elem, index) => {
    elem.style.backgroundColor = theme.bodyStyleBg;
  });
  btnBorder.forEach((elem, index) => {
    elem.style.color = theme.textColorColor;
  });

  //   rotation animation container
  if (previousMode === "light" && currentMode === "dark") {
    mainContainerBorder.style.animation = "none";

    setTimeout(() => {
      mainContainerBorder.style.animation = "rotateContainer 0.5s linear";
    }, 10);
  }
};

themeBtn.addEventListener("click", themeChanger);

// Counter

const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset");
const countDisplay = document.querySelector(".count-label ");
const inputRange = document.querySelector(".input-container");
// const repeatDisplayCounter = document.querySelector(".repeat-display");

let count = 0;
let rangeValue = Infinity;
let repeatCounter = 0;

inputRange.addEventListener("input", function () {
  rangeValue = parseInt(inputRange.value);
});

increaseBtn.onclick = function () {
  if (count === rangeValue) {
    count = 0;
    countDisplay.textContent = count;
    repeatCounter++;
    repeatDisplay.textContent = repeatCounter;
    repeatDisplay.style.display = "flex";
  } else if (count < rangeValue) {
    count++;
    countDisplay.textContent = count;
  }
  if (count >= rangeValue) {
    countDisplay.style.color = "red";
  } else {
    const themeColor =
      currentMode === "light"
        ? themeData.light.textColorColor
        : themeData.dark.textColorColor;
    countDisplay.style.color = themeColor;
  }
};

decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }

  const themeColor =
    currentMode === "light"
      ? themeData.light.textColorColor
      : themeData.dark.textColorColor;
  countDisplay.style.color = themeColor;
};

resetBtn.onclick = function () {
  count = 0;
  countDisplay.textContent = count;
  rangeValue = Infinity;
  inputRange.value = "";
  repeatCounter = 0;
  const themeColor =
    currentMode === "light"
      ? themeData.light.textColorColor
      : themeData.dark.textColorColor;
  countDisplay.style.color = themeColor;
  repeatDisplay.style.display = "none";
};

// button animation

increaseBtn.addEventListener("click", function () {
  increaseBtn.classList.add("bounce-out");
  setTimeout(() => {
    increaseBtn.classList.remove("bounce-out");
    increaseBtn.classList.add("bounce-in");
    setTimeout(() => {
      increaseBtn.classList.remove("bounce-in");
    }, 500);
  }, 500);
});

decreaseBtn.addEventListener("click", function () {
  decreaseBtn.classList.add("bounce-out");
  setTimeout(() => {
    decreaseBtn.classList.remove("bounce-out");
    decreaseBtn.classList.add("bounce-in");
    setTimeout(() => {
      decreaseBtn.classList.remove("bounce-in");
    }, 500);
  }, 500);
});
