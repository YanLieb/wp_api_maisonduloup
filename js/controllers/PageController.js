import Page from '../classes/Page.js';

export default class PageController {
    constructor() {
        this.pages = new Page();
        this.homeHTMLElement = this.createHomeHTMLElement();
    }

    createHomeHTMLElement() {
        const homeHTMLElement = document.createElement('section');
        homeHTMLElement.setAttribute('id', 'home');
        return document.querySelector('body').appendChild(homeHTMLElement);
    }

    async getHomePageContent() {
        const pages = await this.pages.fetchPageContent();

        // identify homepage
        const homepage = pages.find(page => page.slug === "home");

        // sort and set content sections from pages children of home
        pages.sort((a, b) => a.menu_order - b.menu_order)
            .forEach(page => {
                if (page.parent === homepage.id) {
                    const homeSectionElement = document.createElement("div");
                    homeSectionElement.setAttribute('id', `home-${page.slug}`);
                    homeSectionElement.innerHTML = page.content.rendered;
                    this.homeHTMLElement.appendChild(homeSectionElement);
                }
            })
    }
}
