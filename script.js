const output = document.querySelector("#output");
const inputs = document.querySelectorAll(".input");
const clear = document.getElementById("clear");
const sign = document.getElementById("sign");
const percent = document.getElementById("percent");
const equals = document.getElementById("equals");

// Input number value
for (let input of inputs) {
  input.addEventListener("click", () => {
    output.value += input.value;
  });
}

// Clear Input
function clearInput() {
  output.value = null;
}
clear.addEventListener("click", clearInput);

// Change Sign
sign.addEventListener("click", () => {
  output.value *= -1;
});

// Convert to Percent
percent.addEventListener("click", () => {
  output.value /= 100;
});

// Solve
function solve() {
  output.value = eval(output.value);
}
equals.addEventListener("click", solve);
