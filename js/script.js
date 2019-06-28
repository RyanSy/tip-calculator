const bill = document.getElementById('bill');
const percentage = document.getElementById('percentage');
const split = document.getElementById('split');
const splitYes = document.getElementById('splitYes');
const splitNo = document.getElementById('splitNo');
const splitContainer = document.getElementById('splitContainer');
const tip = document.getElementById('tip');

// toggle split field on and off - if off, disable input and set to 1
splitYes.addEventListener('click', enableSplit);
splitNo.addEventListener('click', disableSplit);

// delete tip value if bill, percentage or split are changed
bill.addEventListener('change', updateTip);
percentage.addEventListener('change', updateTip);
split.addEventListener('change', updateTip);

// event listener callback functions
function enableSplit() {
  split.removeAttribute('disabled');
  tip.innerHTML = '';
}

function disableSplit() {
  split.setAttribute('disabled', true);
  split.value = 1;
  tip.innerHTML = '';
}

function updateTip() {
  tip.innerHTML = '';
}

// convert bill input value to currency string
function convertToCurrencyString() {
  if (isNaN(bill.value) || bill.value < 0) {
    bill.value = '$0.00';
  } else {
    const n = new Number(bill.value);
    bill.value = n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}

// convert percentage input value to percentage string
function convertToPercentString() {
  if (isNaN(percentage.value) || percentage.value < 1) {
    percentage.value = '1%';
  } else {
    const n = new Number(percentage.value * .01);
    percentage.value = n.toLocaleString('en-US', { style: 'percent' });
  }
}

// main calculate tip function
function calculateTip() {
  const billAmount = Number(bill.value.replace(/[^\d.]/g, ''));
  const tipPercentage = parseFloat(percentage.value)/100;
  const total = (billAmount * tipPercentage / split.value);
  const totalTip = new Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  let text;
  if (split.value > 1) {
    text = ' per person';
  } else {
    text = '';
  }

  tip.innerHTML = `<strong>${totalTip}</strong> ${text}`;
}
