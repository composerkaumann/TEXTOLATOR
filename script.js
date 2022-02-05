"use strict";
//
const data = {
  numbers: [0],
  previous: [],
  entry: true,
  negative: false,
  operator: null,
  clickTargetID: null,
};
//
// console.table(data.numbers + "; " + data.numbers.length + "; " + data.numbers[0]);
//
function btnEvent(btnValue) {
  if (typeof btnValue === "number") {
    //   console.table(btnValue + ", number");
    populateDisplayObj(btnValue);
  } else if (btnValue === "\u0043") {
    // console.table(btnValue + ", clear");
    clearAll();
  } else if (btnValue === "\u00B1") {
    // console.table(btnValue + ", plusmin");
    data.negative = !data.negative;
    showNumbers();
  } else if (btnValue === "\u002E" && !data.numbers.includes("\u002E")) {
    //  console.table(btnValue + ", dot");
    populateDisplayObj(btnValue);
  } else {
    //  console.table(btnValue + ", operator");
  }
}
//
function showNumbers() {
  const startDiv = 71;
  for (let i = 0; i < 9; i++) {
    document.getElementById(startDiv - i * 2).textContent =
      data.numbers[data.numbers.length - 1 - i];
  }
  if (data.negative === true) {
    document.getElementById(53).textContent = "-";
  } else {
    document.getElementById(53).textContent = "";
  }
}
//
function populateDisplayObj(num) {
  if (data.numbers.length === 1 && data.numbers[0] === 0 && num !== "\u002E") {
    data.numbers = [];
  }
  data.numbers.push(num);
  if (data.numbers.length > 9) {
    data.numbers.length = 9;
  }
  // console.table("cont:" + data.numbers + "; length:" + data.numbers.length);
  showNumbers();
}
//
function clearAll() {
  data.numbers = [0];
  data.previous = [];
  data.entry = true;
  data.negative = false;
  data.operator = null;
  showNumbers();
}
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
showNumbers();
