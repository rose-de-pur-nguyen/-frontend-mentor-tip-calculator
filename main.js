const bill = document.querySelector('#dollar-detail');
const numberPpl = document.querySelector('.people-detail');
const tipByPerson = document.querySelector('.tipByPerson');
const totalByPerson = document.querySelector('.totalByPerson');
const tipDetail = document.querySelectorAll('.tip');
const customDetail = document.querySelector('.custom');
const resetBtn = document.querySelector('.reset');
const warning = document.querySelector('.number-people .heading p:nth-child(2)');
const warningBorder = document.querySelector('.number-people div:nth-child(2');

const billPlaceholder = bill.getAttribute('placeholder');
const numberPplPlaceholder = numberPpl.getAttribute('placeholder');
const customPlaceholder = customDetail.getAttribute('placeholder');

let billVal = null;
let tipVal = null;
let pplVal = null;
let customVal = null;

let tipPerPerson = 0;
let totalPerPerson = 0;


bill.addEventListener('input', (e) => {
    billVal = parseFloat(e.target.value);
    bill.style.color = "hsl(183, 100%, 15%)";
    bill.style.fontWeight = "700";
    tipCalculate();
});

let selectedTip; 

tipDetail.forEach(button => {
  button.addEventListener("click", function() {
    // Remove "focused" class from previously selected option (if any)
    if (selectedTip) {
      selectedTip.classList.remove("focused");
    }

    // Update selectedTip
    selectedTip = this;

    // Add "focused" class to the clicked button
    this.classList.add("focused");
    tipVal = (this.value)/100;
    tipCalculate();
  });
});

customDetail.addEventListener('input', (e) => {
    customVal = parseFloat(e.target.value);
    tipCalculate();
})

numberPpl.addEventListener('input', (e) => {
    pplVal = parseInt(e.target.value);
    numberPpl.style.color = "hsl(183, 100%, 15%)";
    numberPpl.style.fontWeight = "700";
    if (pplVal > 0) {
        tipCalculate();
    } else {
        tipByPerson.textContent = "0.00";
        totalByPerson.textContent = "0.00";
        if (numberPpl.parentElement.classList.contains = "detail") {
            console.log(1);
            warningBorder.classList.toggle('active');
            warning.classList.toggle('active');
        }
    }
});

function tipCalculate() {
    if (billVal !== null && tipVal !== null && pplVal > 0) {
      if (tipDetail.length > 0 && tipVal) { // Check if tip button selected
        tipPerPerson = (billVal * tipVal) / pplVal;
      } else if (customVal !== null) {
        tipPerPerson = (billVal * (customVal / 100)) / pplVal;
      }
      totalPerPerson = tipPerPerson + (billVal / pplVal);
      updateDisplay(); 
    }
  }
  
function updateDisplay() {
    tipByPerson.textContent = "$" + tipPerPerson.toFixed(2);
    totalByPerson.textContent = "$" + totalPerPerson.toFixed(2);
}

resetBtn.addEventListener('click', () => {
    selectedTip.classList.remove('focused');

    tipByPerson.textContent = "$" + "0.00";
    totalByPerson.textContent = "$" + "0.00";

    bill.value = "";
    numberPpl.value = "";
    customDetail.value = "";

    billVal = null;
    tipVal = null;
    pplVal = null;
    customVal = null;
  
    bill.setAttribute('placeholder', billPlaceholder);
    numberPpl.setAttribute('placeholder', numberPplPlaceholder);
    customDetail.setAttribute('placeholder', customPlaceholder);

    warning.classList.toggle('active');
    warningBorder.classList.toggle('active');
})









