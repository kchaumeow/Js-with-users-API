const userListHTML = document.getElementById('usersList');
const showUsersButton = document.getElementById('showUsersButton');


async function createUserList(userListHTML, user_list){
    for (user of user_list){
        const new_user = `<li>
        <h5>${user.username}</h5>
        <p>NAME: ${user.name}</p>
        <p>EMAIL: ${user.email}</p></li>`
        userListHTML.innerHTML += new_user;
    }
}

async function readUserJson(){
    const result = fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
    const user_list = await result;
    return user_list.json();
}

showUsersButton.addEventListener('click', async() => {createUserList(userListHTML,await readUserJson());
});

showUsersButton.addEventListener('click', () => showUsersButton.classList.add('d-none'));

