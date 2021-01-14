const btnOpenModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const overlay = document.querySelector('.overlay');
const btnModalClose = document.getElementById('close-button');

// Close Modal by clicking outside
window.onclick = function (event) {
  if (event.target === overlay) {
    closeModal();
  }
};

btnOpenModal.addEventListener('click', showModal);
btnModalClose.addEventListener('click', closeModal);

function showModal() {
  modalStyles(true);
  isBtnBlocked(true);
}
function closeModal() {
  modalStyles(false);
  isBtnBlocked(false);
}

function modalStyles(isTrue) {
  if (isTrue === true) {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    return;
  } else {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    return;
  }
}

function isBtnBlocked(bool) {
  bool === true
    ? (btnOpenModal.disabled = true)
    : (btnOpenModal.disabled = false);
}
