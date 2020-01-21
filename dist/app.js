/*********************
  Element Hooks
**********************/
// Fields
amount = document.querySelector("#amount");
interest = document.querySelector("#interest");
years = document.querySelector("#years");
// Button
calculate = document.querySelector("button");
// Result
results = document.querySelector("section:nth-of-type(2)");
// Fields
monthlyPayment = document.querySelector("#monthly-payment");
totalPayment = document.querySelector("#total-payment");
totalInterest = document.querySelector("#total-interest");

/*********************
  Calculate Event
**********************/
calculate.addEventListener("click", function(e) {
  e.preventDefault();
  results.style.display = "block";
  let computedMonthlyPayment =
    Number(amount.value) + Number(interest.value) + Number(years.value);
  let computedTotalPayment =
    Number(amount.value) + Number(interest.value) * Number(years.value);
  let computedTotalInterest =
    Number(amount.value) * Number(interest.value) * Number(years.value);
  monthlyPayment.innerHTML = computedMonthlyPayment;
  totalPayment.innerHTML = computedTotalPayment;
  totalInterest.innerHTML = computedTotalInterest;
});
