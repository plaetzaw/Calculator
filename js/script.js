let display = document.getElementById("input");
let buttons = document.querySelector(".buttons");
let operator1 = 0;
let operator2 = 0;
buttons.addEventListener("click", function(e) {
  display.textContent += e.target.textContent;
  switch (e.target.textContent) {
    case "+":
      operator1 = display.textContent.slice(0, display.textContent.length - 1);
      console.log(operator1);
      break;
    case "-":
      operator1 = display.textContent.slice(0, display.textContent.length - 1);
      console.log(operator1);
      break;
    case "X":
      operator1 = display.textContent.slice(0, display.textContent.length - 1);
      console.log(operator1);
      break;
    case "/":
      operator1 = display.textContent.slice(0, display.textContent.length - 1);
      console.log(operator1);
      break;
    case "C":
      operator1 = 0;
      operator2 = 0;
      display.textContent = "";
      break;
    case "=":
      console.log(operator1);
      operator2 = display.textContent.slice(
        operator1.length + 1,
        display.textContent.length
      );
      console.log(operator2);
      for (let i = 0; i < display.textContent.length; i++) {
        if (display.textContent[i] == "+") {
          let result = parseFloat(operator1) + parseFloat(operator2);
          display.textContent = result;
          break;
        } else if (display.textContent[i] == "-") {
          let result = parseFloat(operator1) - parseFloat(operator2);
          display.textContent = result;
          break;
        } else if (display.textContent[i] == "X") {
          let result = parseFloat(operator1) * parseFloat(operator2);
          display.textContent = result;
          break;
        } else if (display.textContent[i] == "/") {
          let result = parseFloat(operator1) / parseFloat(operator2);
          display.textContent = result;
          break;
        }
      }
  }
});
