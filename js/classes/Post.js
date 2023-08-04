export default class Post {
    constructor() {
        this.baseURL = 'https://maisonduloup.org/wp-json/wp/v2/posts';
    }

    async fetchPosts() {
        const response = await fetch(`${this.baseURL}`);
        const posts = await response.json();
        return Boolean(posts) ? posts : new Error('Posts not found');
    }
}