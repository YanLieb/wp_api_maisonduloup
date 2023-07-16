export default class Page {
    constructor() {
        this.baseURL = 'https://maisonduloup.org/wp-json/wp/v2/pages';
    }

    async fetchPageContent() {
        const response = await fetch(`${this.baseURL}`);
        const pages = await response.json();

        if (pages.length > 0) {
            return pages;
        } else {
            throw new Error('Page not found');
        }
    }
}