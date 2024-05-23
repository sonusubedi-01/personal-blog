 function back(){
    window.location.assign('index.html');
 }
 
const blogPostsSectionEl = document.querySelector('#blog-posts');
const storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

for (let blogPost of storedBlogPosts) {
    const articleEl = document.createElement('article');
    articleEl.className = 'box';

    const titleEl = document.createElement('h2');
    titleEl.textContent = blogPost.title;

    const contentEl = document.createElement('p');
    contentEl.textContent = blogPost.content;
    contentEl.className = 'blog-content'

    const authorEl = document.createElement('p');
    authorEl.className = 'blog-author'
    authorEl.textContent = `Posted by: ${blogPost.username}`;

    articleEl.appendChild(titleEl);
    articleEl.appendChild(contentEl);
    articleEl.appendChild(authorEl);

    blogPostsSectionEl.appendChild(articleEl);

}

