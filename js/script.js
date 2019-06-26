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
  tip.innerHTML = '';
}

function updateTip() {
  tip.innerHTML = '';
}

// main calculate tip function
function calculateTip() {
  let text;
  const total = (bill.value * (percentage.value * .01) / split.value).toFixed(2);

  if (split.value > 1) {
    text = ' per person';
  } else {
    text = '';
  }

  tip.innerHTML = `$${total} ${text}`;
}
