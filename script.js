"use strict";
//
const data = {
  numbers: [0],
  entry: true,
  negative: false,
  clickTargetID: "",
};

let display = [0];
console.table(
  data.numbers + "; " + data.numbers.length + "; " + data.numbers[0]
);
//
function btnEvent(btnValue) {
  if (typeof btnValue === "number") {
    console.table(btnValue + ", number");
    populateDisplay(btnValue);
  } else if (btnValue === "\u0043") {
    console.table(btnValue + ", clear");
  } else if (btnValue === "\u00B1") {
    console.table(btnValue + ", plusmin");
  } else if (btnValue === "\u002E" && !display.includes("\u002E")) {
    console.table(btnValue + ", dot");
    populateDisplay(btnValue);
  } else {
    console.table(btnValue + ", operator");
  }
}
//
function populateDisplay(num) {
  if (data.numbers.length === 1 && data.numbers[0] === 0 && num !== "\u002E") {
    data.numbers = [];
  }
  data.numbers.push(num);
  if (data.numbers.length > 9) {
    data.numbers.length = 9;
  }
  console.table(
    "cont:" +
      data.numbers +
      "; length:" +
      data.numbers.length +
      "; pos[0]:" +
      data.numbers[0]
  );
}
//
document.body.addEventListener(
  "mousedown",
  function (evt) {
    data.clickTargetID = +evt.target.id;
    if (evt.target.className === "btn") {
      const twoLeft = document.getElementById(+evt.target.id - 2);
      const oneLeft = document.getElementById(+evt.target.id - 1);
      const oneRight = document.getElementById(+evt.target.id + 1);
      const twoRight = document.getElementById(+evt.target.id + 2);
      if (twoLeft.classList.contains("btn")) {
        twoLeft.classList.add("clicked");
        oneLeft.classList.add("clicked");
      } else if (oneLeft.classList.contains("btn")) {
        oneLeft.classList.add("clicked");
        oneRight.classList.add("clicked");
      } else {
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
    const n = data.clickTargetID;
    document.getElementById(n - 2).classList.remove("clicked");
    document.getElementById(n - 1).classList.remove("clicked");
    document.getElementById(n + 1).classList.remove("clicked");
    document.getElementById(n + 2).classList.remove("clicked");
  },
  false
);
