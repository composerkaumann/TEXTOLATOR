"use strict";
//
let display = [0];
console.table(display + "; " + display.length + "; " + display[0]);
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
  if (display.length === 1 && display[0] === 0 && num !== "\u002E") {
    display = [];
  }
  display.push(num);
  if (display.length > 9) {
    display.length = 9;
  }
  console.table(
    "cont:" + display + "; length:" + display.length + "; pos[0]:" + display[0]
  );
}
//
