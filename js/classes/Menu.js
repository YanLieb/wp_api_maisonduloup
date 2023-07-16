export default class Menu {
    constructor() {
        this.baseURL = 'https://maisonduloup.org/wp-json/wp/v2/menu/';
    }
    async fetchMenu() {
        try {
            const response = await fetch(`${this.baseURL}`);
            const data = await response.json();

            return data.length > 0 ? data : new Error;
        } catch (error) {
            console.error('Error:', error);
        }
    }

}
