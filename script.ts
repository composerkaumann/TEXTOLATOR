"use strict";
//
const data = {
  displayArr: [0],
  num1: null,
  numRes: null,
  op: null,
  lastKey: "C",
  clickTargetID: null,
};
//
function btnEvent(btnValue) {
  if (typeof btnValue === "number") {
    populateDisplayArray(btnValue);
    data.lastKey = "num";
  } else if (btnValue === "C") {
    clearAll(); // C
    data.lastKey = "C";
  } else if (btnValue === "\u00B1" && data.lastKey === "num") {
    toggleNegative(); //plus-min
    data.lastKey = "neg";
  } else if (btnValue === "." && !data.displayArr.includes(".")) {
    populateDisplayArray(btnValue);
    data.lastKey = "num";
  } else if (btnValue === "=") {
    equalBtn();
    data.lastKey = "eq";
  } else if (
    btnValue === "+" ||
    btnValue === "-" ||
    btnValue === "/" ||
    btnValue === "*"
  ) {
    operatorBtn();
    data.op = btnValue;
    data.lastKey = "op";
  }
}
//
function toggleNegative() {
  if (!data.displayArr.includes("-")) {
    data.displayArr.unshift("-");
  } else {
    data.displayArr.shift();
  }
  if (data.displayArr.length > 10) {
    data.displayArr.length = 10;
  }
  refreshDisplay();
}
//
function populateDisplayArray(num) {
  if (data.displayArr.length === 1 && data.displayArr[0] === 0 && num !== ".") {
    data.displayArr = [];
    console.log(".A");
  } else if (num === "." && data.lastKey !== "num" && data.lastKey !== "neg") {
    data.displayArr = [0];
    console.log(".B");
  }
  data.displayArr.push(num);
  if (data.displayArr.length > 10) {
    data.displayArr.length = 10;
  }
  refreshDisplay();
}
//
function refreshDisplay() {
  for (let i = 0; i < 10; i++) {
    document.getElementById(71 - i * 2).textContent =
      data.displayArr[data.displayArr.length - 1 - i];
  }
}
//
function equalBtn() {
  if (data.numRes === null) {
    console.log("A");
    return;
  } else if (
    data.num1 === null &&
    data.lastKey !== "num" &&
    data.lastKey !== "neg"
  ) {
    console.log("B");
    data.num1 = data.numRes;
  } else if (data.lastKey === "eq" || data.lastKey === "neg") {
    console.log("C");
  } else {
    console.log("D");
    data.num1 = displayToNumber();
  }
  data.numRes = mathe();
  numberToDisplay();
  refreshDisplay();
  data.displayArr = [];
}
//
function operatorBtn() {
  if (data.lastKey === "op") {
    return;
  } else if (data.numRes !== null) {
    data.num1 = displayToNumber();
    data.numRes = mathe();
  } else {
    data.numRes = displayToNumber();
  }
  numberToDisplay();
  refreshDisplay();
  data.displayArr = [];
}
//
function displayToNumber() {
  return +data.displayArr.join("");
}
//
function numberToDisplay() {
  data.displayArr = Array.from(data.numRes.toString());
  console.log(data.displayArr);
}
//
function mathe() {
  let result;
  switch (data.op) {
    case "+":
      result = data.numRes + data.num1;
      break;
    case "-":
      result = data.numRes - data.num1;

      break;
    case "*":
      result = data.numRes * data.num1;
      break;
    case "/":
      result = data.numRes / data.num1;
      break;
  }
  // must truncate / round
  console.log(result);
  return result;
}
//
function clearAll() {
  data.displayArr = [0];
  data.num1 = null;
  data.numRes = null;
  data.op = null;
  data.lastKey = null;
  refreshDisplay();
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
refreshDisplay();
