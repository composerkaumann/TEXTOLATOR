"use strict";
//
const data = {
  displayArr: [0],
  num1: null,
  num2: null,
  negative: false,
  op1: null,
  op2: null,
  //  entry: true,
  clickTargetID: null,
};
//
function btnEvent(btnValue) {
  if (typeof btnValue === "number") {
    populateDisplayObj(btnValue);
  } else if (btnValue === "\u0043") {
    clearAll();
  } else if (btnValue === "\u00B1") {
    data.negative = !data.negative;
    showNumbers();
  } else if (btnValue === "\u002E" && !data.displayArr.includes("\u002E")) {
    populateDisplayObj(btnValue);
  } else {
    data.op1 = btnValue;
    calculate();
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
function arrayToDecimal(arr) {
  return !data.negative ? +arr.join("") : -Math.abs(+arr.join(""));
}
//
function decimalToArray(decimal) {
  if (decimal < 0) {
    data.negative = true;
  }
  const arr = Array.from(decimal.toString()).map(Number);
  for (i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr[i] = ".";
    }
  }
  data.displayArr = arr;
  showNumbers();
}
//
function calculate() {
  if (!data.op2) {
    //
  } else {
    //
  }
}
//
function mathe(x, y) {
  switch (data.op2) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return;
  }
}
//
function clearAll() {
  data.displayArr = [0];
  data.num1 = null;
  data.num2 = null;
  data.negative = false;
  data.op1 = null;
  data.op2 = null;
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
