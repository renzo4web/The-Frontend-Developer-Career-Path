// call user API
// store random first name in a variable firstUser
// call user API again, after you finish calling first one
// store random first name in variable secondUser
// console log `${firstUser} and ${secondUser} are friends`

let users = {first,second};

const getUser = async () => {
  const userApi = 'https://randomuser.me/api/';

  await fetch(userApi)
    .then((r) => r.json())
    .then(({ results }) => ({ name: firstUser } = results[0]));
  await fetch(userApi)
    .then((r) => r.json())
    .then(({ results }) => ({ name: secondUser } = results[0]));
  console.log(firstUser, secondUser);

  console.log(`${firstUser.first} and ${secondUser.first} are friends`);
};

document.getElementById('action').addEventListener('click', getUser);
