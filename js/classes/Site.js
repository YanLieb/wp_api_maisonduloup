export default class Site {
    constructor() {
        this.baseURL = 'https://maisonduloup.org/wp-json/';
    }

    async fetchSite() {
        const response = await fetch(`${this.baseURL}`);
        const site = await response.json();
        if (Boolean(site)) {
            return site;
        } else {
            throw new Error('Site Informations not found');
        }
    }
}