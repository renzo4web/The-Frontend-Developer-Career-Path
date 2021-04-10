// call user API
// store random first name in a variable firstUser
// call user API again, after you finish calling first one
// store random first name in variable secondUser
// console log `${firstUser} and ${secondUser} are friends`

const btn = document.getElementById('action');

const getUser = async () => {
  const userApi = 'https://randomuser.me/api/';
  const firstResponse = await fetch(userApi);
  const { results } = await firstResponse.json();
  const { name } = results[0];
  const { first, last, title } = name;
  return { first, last, title };
};

const logUsers = async () => {
  btn.disabled = true;
  const firstUser = await getUser();
  const secondUser = await getUser();
  btn.disabled = false;
  console.log(`${firstUser.first} and ${secondUser.first} are friends`);
};
btn.addEventListener('click', logUsers);
