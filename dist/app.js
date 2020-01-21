/*********************
  Element Hooks
**********************/

form = document.querySelector("form");
containers = document.querySelectorAll("section:nth-of-type(1) .container");
// Up and down sliders
up = document.querySelectorAll(".fas.fa-caret-square-up");
down = document.querySelectorAll(".fas.fa-caret-square-down");
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

/*********************
  Container Event
**********************/
containers.forEach(function(container) {
  container.addEventListener("mouseenter", function(e) {
    e.target.children[2].style.display = "initial";
  });
  container.addEventListener("mouseleave", function(e) {
    e.target.children[2].style.display = "none";
  });
});

/*********************
  Slider Event
**********************/
form.addEventListener("click", function(e) {
  console.log(e.target);
  eleClass = e.target.className;
  if (
    eleClass === "fas fa-caret-square-up" ||
    eleClass === "fas fa-caret-square-down"
  ) {
    fieldValue = e.target.parentElement.previousElementSibling.value;
    if (fieldValue === "") {
      fieldValue = 0;
    }
    fieldValue =
      eleClass === "fas fa-caret-square-up"
        ? Number(fieldValue) + 1
        : Number(fieldValue) - 1;
    e.target.parentElement.previousElementSibling.value = fieldValue;
  }
});
