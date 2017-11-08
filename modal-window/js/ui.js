window.addEventListener(`load`, activeModal);

function activeModal() {
  initModalUi();
  const modal = document.querySelector(`.modal-wrapper`);
  const presMeBtn = document.querySelector(`.btn.trigger`);

  presMeBtn.addEventListener(`click`, showModal);
  
  function showModal() {
    modal.classList.add(`open`);
  }
}