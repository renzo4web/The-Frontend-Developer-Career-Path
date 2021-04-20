const renderCardHTML = (user) => {
  const { name, username, email, address, phone, website, company } = user;

  const html = `
    <main class="card">
    <section class="card__name">
        <strong>${name}</strong>
        <span>@${username}</span>
    </section>
    <section class="card__company-info flex">
        <p>Company : ${company.name}</p>
        <p>${company.catchPhrase}</p>
        <p>${company.bs}</p>
    </section>
    <section class="card__personal-info flex">
        <p>📧${email}</p>
        <p>📞${phone}</p>
        <p>💻${website}</p>
    </section>
    <section class="card__contact-info flex">
        <p>"street": ${address.street}</p>
        <p>${address.suit}</p>
        <p>${address.city}</p>
        <p>${address.zipcode}</p>
    </section>
</main>
    `;

  document.body.insertAdjacentHTML('afterbegin', html);
};

const getUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data[2]
  } catch (e) {
      console.warn(e);
  }
};


async function init() {
  try {
    const user = await getUser();
    renderCardHTML(user);
  } catch (error) {
      console.warn(error);
  }
}

init();