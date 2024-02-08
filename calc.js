const button = document.querySelectorAll(".button");
let inputElem = document.querySelector("#input");
let outputElem = document.querySelector("#output");
let num1 = "";
let num2 = "";
let opp = "";
let temp = "";

function clear() {
  num1 = "";
  num2 = "";
  opp = "";
  temp = "";
  inputElem.textContent = "";
  outputElem.textContent = "";
}

function identify(e) {
  output.textContent = "";
  let value = e.target.value;
  console.log(value);
  if (value === "C") {
    console.log("clear");
    clear();
  } else if (value === "=") {
    console.log("calculate");
    temp = calc(num1, num2, opp);
    temp = temp.toString();
    inputElem.textContent = "";
    num1 = temp;
    num2 = "";
    outputElem.textContent = temp;
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    console.log(temp.slice(-1));
    if (num2 !== "") {
      num1 = calc(num1, num2, opp);
      num2 = "";
      temp = num1 + value;

      inputElem.textContent = temp;
    } else {
      if (
        temp.slice(-1) === "+" ||
        temp.slice(-1) === "-" ||
        temp.slice(-1) === "*" ||
        temp.slice(-1) === "/"
      ) {
        temp = temp.slice(0, -1) + value;
        opp = value;
        inputElem.textContent = temp;
      } else {
        opp = value;
        temp = temp + value;
        inputElem.textContent = temp;
      }
    }
  } else {
    if (
      num2 !== "" ||
      temp.slice(-1) === "+" ||
      temp.slice(-1) === "-" ||
      temp.slice(-1) === "*" ||
      temp.slice(-1) === "/"
    ) {
      console.log("num2");
      temp = temp + value;
      num2 = num2 + value;
      inputElem.textContent = temp;
    } else {
      console.log("num1");
      temp = temp + value;
      num1 = num1 + value;
      inputElem.textContent = temp;
    }
  }
}

function calc(a, b, op) {
  if (op == "+") {
    return add(num1, num2);
  } else if (op == "-") {
    return sub(num1, num2);
  } else if (op == "*") {
    return mult(num1, num2);
  } else if (op == "/") {
    return div(num1, num2);
  } else {
    return "syntax error";
  }
}
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}
function mult(a, b) {
  return parseFloat(a) * parseFloat(b);
}
function sub(a, b) {
  return parseFloat(a) - parseFloat(b);
}
function div(a, b) {
  if (b === "0") {
    return "InValid";
  }
  return parseFloat(a) / parseFloat(b);
}

button.forEach((btn) => btn.addEventListener("click", identify));
