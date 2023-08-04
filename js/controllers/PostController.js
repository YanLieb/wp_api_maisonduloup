import Post from "../classes/Post.js";

export default class PostController {
    constructor() {
        this.posts = new Post();
    }

    async getHomepagePosts() {
        const posts = await this.posts.fetchPosts();
        const homepagePostsElement = document.createElement('div');
        homepagePostsElement.setAttribute('id', 'home-posts');
        document.querySelector('#home').appendChild(homepagePostsElement);

        const homepagePosts = [];
        posts.forEach((post, i) => {
            if (post.sticky == true || i <= 2) homepagePosts.push(post);
        })

        homepagePosts.forEach(post => {
            let homepagePost = document.createElement("div");
            homepagePost.setAttribute('id', `post-${post.slug}`);
            homepagePost.classList.add('home-post');

            async function getThumbnailImage() {
                let mediaURL = `https://maisonduloup.org/wp-json/wp/v2/media/${post.featured_media}`;
                let response = await fetch(mediaURL);
                let thumbnailImage = await response.json();

                let postThumbnail = document.createElement('img');
                postThumbnail.classList.add('post-thumbnail');
                postThumbnail.setAttribute('src', thumbnailImage.guid.rendered);
                homepagePost.appendChild(postThumbnail);
            }

            if (post.featured_media !== 0) {
                getThumbnailImage();
            }

            if (post.title.rendered !== "") {
                let postTitle = document.createElement('h2');
                postTitle.innerHTML = post.title.rendered;
                homepagePost.appendChild(postTitle);
            }
            if (post.excerpt.rendered !== "") {
                let postExcerpt = document.createElement('p');
                postExcerpt.innerHTML = post.excerpt.rendered;
                homepagePost.appendChild(postExcerpt);
            }



            homepagePostsElement.append(homepagePost);
        })
    }
}