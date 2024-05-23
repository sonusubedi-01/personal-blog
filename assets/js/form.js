const usernameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-post');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        alert("Please enter all fields");
        return;
    }
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPost = {
        username: username,
        title: title,
        content: content
    };

    blogPosts.push(blogPost);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    // Redirect to view blog posts page after form data is saved.
    location.assign("blog.html");
});
