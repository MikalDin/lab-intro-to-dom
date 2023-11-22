console.log(document.body);
const firstSection = document.querySelector('section');

firstSection.classList.add('featured');

const newArticle = document.createElement('article');

newArticle.innerHTML = `
  <article>
  <img
    src="./images/paul-gilmore-unsplash.jpg"
    alt="Image of a mountain in front of a lake."
  />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all is
    so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <span><strong>Read Time:</strong> 4 Minutes</span
      ><a href="#">Read more...</a>
    </p>
  </aside>
</article>
`;

console.log(newArticle);

const postsSection = document.querySelector('section.posts');

postsSection.appendChild(newArticle);


const firstArticle = postsSection.querySelector('article');

const secondArticle = firstArticle.nextElementSibling;

postsSection.insertBefore(secondArticle, firstArticle);

const allPostsLink = document.querySelector('header nav ul li:first-child');
allPostsLink.remove();

const featuredPost = document.querySelector('.featured');
const readTimespan = featuredPost.querySelector('span');
readTimespan.remove();

const lastPost = postsSection.lastElementChild;
lastPost.remove();

const nonFeaturedPosts = document.querySelectorAll('section.posts article:not(.feautured) h3');
nonFeaturedPosts.forEach(post -> post.remove());