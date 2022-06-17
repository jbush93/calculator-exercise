window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const startingVals = {amount: 100000, years: 10, rate: .0025}

  const amt = document.getElementById('loan-amount');
  amt.value = startingVals.amount;

  const yrs = document.getElementById('loan-years');
  yrs.value = startingVals.years;

  const rte = document.getElementById('loan-rate');
  rte.value = startingVals.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentVals = getCurrentUIValues();
  updateMonthly(calcMonthlyPayment(currentVals))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calcMonthlyPayment(values) {
  const monRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return ( (monRate * values.amount) / (1 - ((1 + monRate) ** (-n))) ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}
