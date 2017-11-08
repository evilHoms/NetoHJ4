'use strict';

const quantityField = document.querySelector(`#cart-count`);
const priceField = document.querySelector(`#cart-total-price`);
const addBtns = document.querySelectorAll(`button.add`);
const busket = [];

Array.from(addBtns).forEach(btn => {
  btn.addEventListener(`click`, addItem);
});

function addItem() {
  busket.push(this);
  quantityField.innerHTML = calcQuantity();
  priceField.innerHTML = getPriceFormatted(calcPrice());
}

function calcQuantity() {
  return busket.length;
}

function calcPrice() {
  return busket.reduce((prev, cur) => {
    return Number(prev) + Number(cur.dataset.price);
  }, 0);
}

function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
