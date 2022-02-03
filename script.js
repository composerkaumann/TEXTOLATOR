"use strict";

function btnEvent(btnValue) {
  if (btnValue.match(/\d/) || btnValue === "\u00B1" || btnValue === "\u002E") {
    console.table(btnValue + ", entry");
  } else if (btnValue === "C") {
    console.table(btnValue + ", clear");
  } else {
    console.table(btnValue + ", operator");
  }
}
