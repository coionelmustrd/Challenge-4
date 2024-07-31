const postsDiv = document.getElementById('posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>by ${post.username}</p> 
        <button id="btn">Delete</button>`;
        postsDiv.appendChild(postDiv);
    });
    
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

const themeSwitcher = document.querySelector('#toggleMode');
const container = document.querySelector('.light');

let mode = 'dark';


themeSwitcher.addEventListener('click', function () {
    if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
const removeItem = function (){
    "posts".removeItem()
    removeItemFromLocalStorage("posts")
}
const deleteButton = document.querySelector('#btn');
    deleteButton.addEventListener('click', function() {
    removeItem();
    removeItemFromLocalStorage();
});


