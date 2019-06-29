const bill = document.getElementById('bill');
const percentage = document.getElementById('percentage');
const split = document.getElementById('split');
const tip = document.getElementById('tip');
const tipText = document.getElementById('tip-text');

/* convert bill and percentage to currency strings on blur */
bill.onblur = toCurrencyString;
percentage.onblur = toPercentageString;

/* convert bill and percentage to numbers on focus */
bill.onfocus = toCurrencyNumber;
percentage.onfocus = toPercentageNumber;

/* delete tip value if bill, percentage or split are changed */
bill.addEventListener('change', updateTip);
percentage.addEventListener('change', updateTip);
split.addEventListener('change', updateTip);

function toCurrencyString() {
  if (isNaN(bill.value) || bill.value < .01) {
    bill.value = '';
  } else {
    const n = Number(bill.value);
    bill.value = n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}

function toPercentageString() {
  if (isNaN(percentage.value) || percentage.value < 1) {
    percentage.value = '';
  } else {
    const n = Number(percentage.value * .01);
    percentage.value = n.toLocaleString('en-US', { style: 'percent' });
  }
}

function toCurrencyNumber() {
  let billValue = bill.value = Number(bill.value.replace(/[^\d.]/g, ''));

  if (!billValue) {
    bill.value = '';
  } else {
    bill.value = billValue;
  }
}

function toPercentageNumber() {
  let percentageValue = parseFloat(percentage.value);

  if (!percentageValue) {
    percentage.value = '';
  } else {
    percentage.value = percentageValue;
  }
}

function updateTip() {
  tip.innerHTML = '';
  tipText.innerHTML = '';
}

/* main calculate tip function */
function calculateTip() {
  const billAmount = Number(bill.value.replace(/[^\d.]/g, ''));
  const tipPercentage = parseFloat(percentage.value)/100;
  const total = (billAmount * tipPercentage / split.value);
  const totalTip = Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  let text;

  if (split.value > 1) {
    text = ' per person';
  } else {
    text = '';
  }

  tip.innerHTML = `<strong>${totalTip}</strong>`;
  tipText.innerHTML = `${text}`;
}
