export default class Media {
    constructor() {
        this.baseURL = 'https://maisonduloup.org/wp-json/wp/v2/media'
    }

    async fetchMedias() {
        const response = await fetch(`${this.baseURL}`);
        const medias = await response.json();
        return Boolean(medias) ? medias : new Error('Medias not found');
    }
}