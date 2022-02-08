"use strict";
//
const data = {
  displayArr: [0],
  num1: null,
  num2: null,
  numRes: null,
  negative: false,
  op: null,
  lastKey: null,
  clickTargetID: null,
};
//
function btnEvent(btnValue) {
  if (typeof btnValue === "number") {
    populateDisplayObj(btnValue);
    data.lastKey = "number";
  } else if (btnValue === "\u0043") {
    clearAll(); // C
  } else if (btnValue === "\u00B1" && data.lastKey === "number") {
    data.negative = !data.negative; //plus-min
    showNumbers();
  } else if (btnValue === "\u002E" && !data.displayArr.includes("\u002E")) {
    populateDisplayObj(btnValue); //decimal
  } else if (btnValue === "\u003D") {
    equalBtn(btnValue); //equal
  } else {
    operatorBtn(btnValue); //one of 4 operators
  }
}
//
function populateDisplayObj(num) {
  if (
    data.displayArr.length === 1 &&
    data.displayArr[0] === 0 &&
    num !== "\u002E"
  ) {
    data.displayArr = [];
  }
  data.displayArr.push(num);
  if (data.displayArr.length > 9) {
    data.displayArr.length = 9;
  }
  showNumbers();
}
//
function showNumbers() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(71 - i * 2).textContent =
      data.displayArr[data.displayArr.length - 1 - i];
  }
  if (data.negative === true) {
    document.getElementById(53).textContent = "-";
  } else {
    document.getElementById(53).textContent = "";
  }
}
//
function equalBtn(btnValue) {
  if (!data.numRes && data.lastKey !== "=") {
    data.numRes = data.num1;
  }
  if (data.lastKey !== "=") {
    data.num1 = displayToNumber();
  }
  data.num2 = data.numRes;
  data.numRes = mathe(data.num2, data.num1, data.op);
  numberToDisplay();
  showNumbers();
  data.displayArr = [];
  data.lastKey = btnValue;
}
//
function operatorBtn(btnValue) {
  if (data.num1 && data.lastKey !== "=") {
    data.num2 = data.num1;
  }
  data.num1 = displayToNumber();
  if (data.num2 && data.lastKey !== "=") {
    data.numRes = mathe(data.num2, data.num1, btnValue);
  }
  if (data.numRes && data.lastKey !== "=") {
    numberToDisplay();
  }
  showNumbers();
  data.displayArr = [];
  data.op = btnValue;
  data.lastKey = btnValue;
}
//
function displayToNumber() {
  return !data.negative
    ? +data.displayArr.join("")
    : -Math.abs(+data.displayArr.join(""));
}
//
function numberToDisplay() {
  if (data.numRes < 0) {
    data.negative = true;
  }
  const arr = Array.from(Math.abs(data.numRes).toString()).map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr[i] = ".";
    }
  }
  data.displayArr = arr;
}
//
function mathe(num2, num1, btnValue) {
  switch (btnValue) {
    case "+":
      return num2 + num1;
    case "-":
      return num2 - num1;
    case "*":
      return num2 * num1;
    case "/":
      return num2 / num1;
    default:
      return;
  }
}
//
function clearAll() {
  data.displayArr = [0];
  data.num1 = null;
  data.num2 = null;
  data.numRes = null;
  data.negative = false;
  data.op = null;
  data.lastKey = null;
  showNumbers();
}
//
// Two functions to hilight 3 active button divs (and un-hilight).
//
document.getElementById("calc").addEventListener(
  "mousedown",
  function (evt) {
    data.clickTargetID = +evt.target.id;
    if (evt.target.className === "btn") {
      const twoLeft = document.getElementById(+evt.target.id - 2);
      const oneLeft = document.getElementById(+evt.target.id - 1);
      const clicked = document.getElementById(+evt.target.id);
      const oneRight = document.getElementById(+evt.target.id + 1);
      const twoRight = document.getElementById(+evt.target.id + 2);
      if (twoLeft.classList.contains("btn")) {
        twoLeft.classList.add("clicked");
        oneLeft.classList.add("clicked");
        clicked.classList.add("clicked");
      } else if (oneLeft.classList.contains("btn")) {
        oneLeft.classList.add("clicked");
        clicked.classList.add("clicked");
        oneRight.classList.add("clicked");
      } else {
        clicked.classList.add("clicked");
        oneRight.classList.add("clicked");
        twoRight.classList.add("clicked");
      }
    }
  },
  false
);
//
document.body.addEventListener(
  "mouseup",
  function () {
    if (
      data.clickTargetID !== null &&
      data.clickTargetID < 447 &&
      data.clickTargetID > 126
    ) {
      const n = data.clickTargetID;
      document.getElementById(n - 2).classList.remove("clicked");
      document.getElementById(n - 1).classList.remove("clicked");
      document.getElementById(n).classList.remove("clicked");
      document.getElementById(n + 1).classList.remove("clicked");
      document.getElementById(n + 2).classList.remove("clicked");
      data.clickTargetID = null;
    }
  },
  false
);
//
// The initial state of calc when loaded, shows zero.
//
showNumbers();
