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
  let n = 12;
  let p = Number(amount.value);
  let t = Number(years.value);
  let r = Number(interest.value) / 100;
  if (t != 0) {
    console.log(`p: ${p}, t: ${t}, r: ${r}`);
    let computedTotalPayment = p * Math.pow(1 + r / n, n * t);
    let computedTotalInterest = computedTotalPayment - p;
    let computedMonthlyPayment = computedTotalPayment / n / t;
    monthlyPayment.innerHTML = computedMonthlyPayment;
    totalPayment.innerHTML = computedTotalPayment;
    totalInterest.innerHTML = computedTotalInterest;
  }
});
