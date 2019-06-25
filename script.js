const bill = document.getElementById('bill');
const percentage = document.getElementById('percentage');
const split = document.getElementById('split');
const splitYes = document.getElementById('splitYes');
const splitNo = document.getElementById('splitNo');
const splitContainer = document.getElementById('splitContainer');
const tip = document.getElementById('tip');

// calculate tip
function calculateTip() {
  let text;
  const total = (bill.value * (percentage.value * .01) / split.value).toFixed(2);

  if (split.value > 1) {
    text = ' per person';
  } else {
    text = '';
  }

  tip.innerHTML = `$ ${total} ${text}`;
}

// toggle split field on and off
function toggleSplit() {
  if (splitYes.checked) {
    splitContainer.removeAttribute('class', 'display-none');
    tip.innerHTML = '';
  }

  if (splitNo.checked) {
    splitContainer.setAttribute('class', 'display-none');
    split.value = 1;
    tip.innerHTML = '';
  }
}

// delete tip value if split is changed
split.addEventListener('change', updateTip);
function updateTip() {
  tip.innerHTML = '';
}
