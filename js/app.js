$(function () {
  $(".form-group").floatingLabel();
});

let calcButton = document.getElementById("calc-button");
let resetButton = document.getElementById("reset-button");
let message = document.getElementById("msg");
let bmiResult = document.getElementById("bmi");

function showBmi(e) {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  e.preventDefault();

  height = height / 100;

  let result = weight / (height * height);
  let bmi = result.toFixed(1);
  checkBMI(bmi);
}


function checkBMI(bmi) {
  if (bmi < 19) {
    bmiResult.innerHTML = `<h5 class="text-warning" id="bmi-output">${bmi}</h5>`;
    message.innerHTML = `<p class="text-warning text-center message"><b>You are under-weight... Gain some weight</b></p>`;
  } else if (bmi > 25) {
    bmiResult.innerHTML = `<h5 class="text-danger" id="bmi-output">${bmi}</h5>`;
    message.innerHTML = `<p class="text-danger text-center message"><b>You are over-weight... Loose some weight</b></p>`;
  } else {
    bmiResult.innerHTML = `<h5 class="text-success" id="bmi-output">${bmi}</h5>`;
    message.innerHTML = `<p class="text-success text-center message"><b>You are healthy... Yay!!</b></p>`;
  }
}


calcButton.addEventListener("click", showBmi);

$(resetButton).click(function () {
  $("#myForm")[0].reset();
});