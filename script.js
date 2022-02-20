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
    clearAll();
    data.lastKey = "C";
  } else if (btnValue === "\u00B1" && data.lastKey === "num") {
    toggleNegative();
    data.lastKey = "neg";
  } else if (btnValue === "." && !data.displayArr.includes(".")) {
    populateDisplayArray(btnValue);
    data.lastKey = "num";
  } else if (btnValue === "=" && data.op !== null) {
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
  } else if (num === "." && data.lastKey !== "num" && data.lastKey !== "neg") {
    data.displayArr = [0];
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
    return;
  } else if (data.lastKey === "eq") {
  } else if (data.lastKey === "op") {
    data.num1 = data.numRes;
  } else {
    data.num1 = displayToNumber();
  }
  data.numRes = mathe();
  afterCalc();
}
//
function operatorBtn() {
  if (data.lastKey === "op" || data.lastKey === "eq") {
    data.displayArr = [];
    return;
  } else if (data.numRes !== null) {
    data.num1 = displayToNumber();
    data.numRes = mathe();
  } else {
    data.numRes = displayToNumber();
  }
  afterCalc();
}
//
function afterCalc() {
  numberToDisplay();
  refreshDisplay();
  data.displayArr = [];
  if (isNaN(+data.numRes)) {
    data.num1 = null;
    data.numRes = null;
    data.op = null;
  }
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
  const analyseRes = Array.from(result.toString());
  let x = roundHowMuch(analyseRes);
  if (result === Infinity || result === -Infinity) {
    result = "DIV. BY 0!";
  } else if (isNaN(result)) {
    result = "NaNaNaNaaa";
  } else if (result > 9999999999) {
    result = "TOO  BIG ";
  } else if (result < -999999999) {
    result = "TOO  SMALL";
  } else {
    result = Math.round(result * x) / x;
  }
  return result;
}
//
function roundHowMuch(resultArray) {
  const decPosition = resultArray.indexOf(".");
  let x = 1000000000;
  for (let i = 0; i < decPosition; i++) {
    x = x / 10;
  }
  return x;
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
// The initial state of calc when loaded, shows zero.
//
refreshDisplay();
