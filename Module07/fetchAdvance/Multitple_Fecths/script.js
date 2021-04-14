const postsContainer = document.querySelector('.posts');


const generateHTML = (data) => {
    const {title, body, name, company} = data;
    const {name: companyName, catchPhrase, bs} = company;
    const html = `
		<h3>${title}</h3><strong>${name}</strong>
		<p>${body}</p>
		<ul>
		<li>Company: ${companyName}</li>
		<li>${catchPhrase}</li>
		<li>${bs}</li>
        </ul>
	`;
    postsContainer.insertAdjacentHTML('afterbegin', html);
};


async function addPostToDOM() {
    const getPostUrl = 'https://jsonplaceholder.typicode.com/posts';
    const getUsersUrl = 'https://jsonplaceholder.typicode.com/users';
    try {

        const [resPosts, resUsers] = await Promise.all([
            fetch(getPostUrl),
            fetch(getUsersUrl)
        ]);
        const posts = await resPosts.json();
        const users = await resUsers.json();
        const {title, body} = posts[0];
        const [{name, username,company}] = users.filter(({id}) => id === posts[0].userId);
        console.log(name, username);
        generateHTML({title, body, name, company});
    } catch (e) {
        console.warn(e);
    }
}


addPostToDOM();