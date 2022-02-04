"use strict";
//
const data = {
  numbers: [0],
  entry: true,
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
