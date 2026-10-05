let bill = document.getElementById("bill");
let numPerson = document.getElementById("num-person");
let tipBtns = document.querySelectorAll(".tip-btn");
let custom = document.querySelector(".tip-custom");
let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total-amount");
let resetBtn = document.querySelector(".reset-btn");
let error = document.querySelector(".error");

let tipPercentage = 0;

function calculateTip() {
    if (bill.value === "" || Number(bill.value) <= 0 ){
        tipAmount.textContent = "0.00";
        totalAmount.textContent = "0.00";
        return;
    } else if (numPerson.value === "" || Number(numPerson.value) <= 0) {
        tipAmount.textContent = "0.00";
        totalAmount.textContent = "0.00";
        error.style.display = "block";
        return;
    }
    let tip = bill.value * (tipPercentage / 100);
    tipAmount.textContent = (tip / numPerson.value).toFixed(2);
    totalAmount.textContent = (bill.value / numPerson.value + parseFloat(tipAmount.textContent)).toFixed(2);
    error.style.display = "none";
}

tipBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    tipBtns.forEach(function (btn) {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
    custom.value = "";
    tipPercentage = parseFloat(btn.dataset.tip);
    calculateTip();
  });
});

custom.addEventListener("input", function () {
  tipPercentage = parseFloat(custom.value);
  calculateTip();
});  

resetBtn.addEventListener("click", function () {
  bill.value = "";
  numPerson.value = "";
  tipPercentage = 0;
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
  error.style.display = "none";
  tipBtns.forEach(function (btn) {
    btn.classList.remove("selected");
  });
});