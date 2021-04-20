const renderHTML = (users) => {
  html = `
    <header >Header</header>
    <div class="chat">
        <div class="chat__users">
        ${users.map(({username}) => {
                return `<div class="chat__user"><span class="online"></span><span>${username}</span></div>`
        }).join('')}
        </div>
        <main class="chat__main">Main Content</main>
    </div>
    <footer>Footer</footer>`;

    console.log(html);
  document.body.insertAdjacentHTML('afterbegin', html);
};

const fetchUsers = async () => {
  try {
    const res = await fetch('users.json');
    return await res.json();
  } catch (e) {
    console.warn(e);
  }
};

async function init() {
  try {
      console.log('asdasd');
    const users = await fetchUsers();
    renderHTML(users);
  } catch (e) {
      console.warn(e);
  }
}

init();