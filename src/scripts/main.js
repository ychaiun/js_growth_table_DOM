'use strict';

document.querySelector('.append-row').addEventListener('click', appendRow);
document.querySelector('.remove-row').addEventListener('click', removeRow);

document
  .querySelector('.append-column')
  .addEventListener('click', appendColumn);

document
  .querySelector('.remove-column')
  .addEventListener('click', removeColumn);

const tbody = document.querySelector('tbody');
const rows = tbody.rows;

const maxCount = 10;
const minCount = 2;

let countRow = rows.length;
let countColumn = rows[0].childElementCount;

function appendRow() {
  countRow++;

  if (countRow === maxCount) {
    this.disabled = true;

    return;
  }

  document.querySelector('.remove-row').disabled = false;

  tbody.append(rows[0].cloneNode('deep'));
}

function removeRow() {
  countRow--;

  if (countRow === minCount) {
    this.disabled = true;
  }

  document.querySelector('.append-row').disabled = false;

  tbody.removeChild(rows[0]);
}

function appendColumn() {
  countColumn++;

  document.querySelector('.remove-column').disabled = false;

  if (countColumn === maxCount) {
    this.disabled = true;

    return;
  }

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell();
  }
}

function removeColumn() {
  countColumn--;

  document.querySelector('.append-column').disabled = false;

  if (countColumn === minCount) {
    this.disabled = true;
  }

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(-1);
  }
}
