const formEl = document.querySelector('#form');
const userFormEl = document.querySelector('#username');
const titleFormEl = document.querySelector('#title');
const contentFormEl = document.querySelector('#content');
let postsList = JSON.parse(localStorage.getItem("posts")) || [];
const formSubmitHandler = function (event) {
    event.preventDefault();
    
    let newData = {
        username: username.value.trim(),
        title: title.value.trim(),
        content: content.value.trim()
    }

    if (newData.title == '' && newData.username == '' && newData.content == '') {
        alert ('Please complete form before submitting');
        return;
    } 
      else {
        postsList.push(newData)
        localStorage.setItem('posts', JSON.stringify(postsList));
    }
    window.location.href = 'blog.html'
    }

    formEl.addEventListener('submit', formSubmitHandler);

    
const toggleMode = document.querySelector('#toggleMode');
const container = document.querySelector('.light');

let mode = 'dark';

toggleMode.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
