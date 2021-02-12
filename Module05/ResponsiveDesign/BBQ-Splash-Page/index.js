const miForm = document.getElementById('email-collector'),
    nameInput = document.getElementById('name'),
    emailInput = document.getElementById('email');

miForm.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  let nameUser = nameInput.value,
      emailUser = emailInput.value;

  displayMessage(nameUser, emailUser);
}

function displayMessage(name, userEmailAddress) {

  const title = document.querySelector('.main-content h2'),
      subtitle = document.querySelector('.main-content h3'),
      description = document.querySelector('.description');

  title.textContent = `Congratulations, ${name}`;
  subtitle.textContent = 'You\'re on your way to becoming a BBQ Master!';
  description.textContent = `You will get weekly BBQ tips sent to: ${userEmailAddress}`;
  miForm.style.display = 'none';
}
