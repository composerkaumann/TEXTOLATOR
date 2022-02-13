"use strict";
//
const data = {
  displayArr: [0],
  num1: null,
  num2: null,
  numRes: null,
  op: null,
  lastKey: null,
  clickTargetID: null,
};
//
function btnEvent(btnValue) {
  if (typeof btnValue === "number") {
    populateDisplayObj(btnValue);
    data.lastKey = "num";
  } else if (btnValue === "C") {
    clearAll(); // C
    data.lastKey = "C";
  } else if (btnValue === "\u00B1" && data.lastKey === "number") {
    toggleNegative(); //plus-min
    data.lastKey = "neg";
  } else if (btnValue === "." && !data.displayArr.includes(".")) {
    populateDisplayObj(btnValue); //decimal
  } else if (btnValue === "=") {
    equalBtn(); //equal
    data.lastKey = "eq";
  } else {
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
  showNumbers();
}
//
function populateDisplayObj(num) {
  if (data.displayArr.length === 1 && data.displayArr[0] === 0 && num !== ".") {
    data.displayArr = [];
  }
  data.displayArr.push(num);
  if (data.displayArr.length > 10) {
    data.displayArr.length = 10;
  }
  showNumbers();
}
//
function showNumbers() {
  for (let i = 0; i < 10; i++) {
    document.getElementById(71 - i * 2).textContent =
      data.displayArr[data.displayArr.length - 1 - i];
  }
}
//
function equalBtn() {
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
}
//
function operatorBtn() {
  if (data.num1 && data.lastKey !== "=") {
    data.num2 = data.num1;
    console.log(`data.num1 && data.lastKey !== "=" => data.num2 = data.num1`);
  }
  data.num1 = displayToNumber();
  if (data.num2 && data.lastKey !== "=") {
    data.numRes = mathe();
    console.log(`data.num2 && data.lastKey !== "=" => data.numRes = mathe();`);
  }
  if (data.numRes && data.lastKey !== "=") {
    numberToDisplay();
    console.log(`data.numRes && data.lastKey !== "=" numberToDisplay();`);
  }
  showNumbers();
  data.displayArr = [];
}
//
function displayToNumber() {
  return +data.displayArr.join("");
}
//
function numberToDisplay() {
  data.displayArr = Array.from(data.numRes.toString());
}
//
function mathe() {
  let result;
  switch (data.op) {
    case "+":
      result = data.num2 + data.num1;
      console.log("+");
      console.log(data);
      break;
    case "-":
      result = data.num2 - data.num1;
      console.log("-");
      console.log(data);
      break;
    case "*":
      result = data.num2 * data.num1;
      console.log("*");
      console.log(data);
      break;
    case "/":
      result = data.num2 / data.num1;
      console.log("/");
      console.log(data);
      break;
  }
  console.log("send");
  return result;
}
//
function clearAll() {
  data.displayArr = [0];
  data.num1 = null;
  data.num2 = null;
  data.numRes = null;
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
