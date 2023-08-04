import Site from '../classes/Site.js';

export default class SiteController {
    constructor() {
        this.site = new Site();
    }

    async getSite() {
        const site = await this.site.fetchSite();
        const header = document.querySelector('header');
        const head = document.querySelector('head');

        async function getLogo() {
            const response = await fetch(`https://maisonduloup.org/wp-json/wp/v2/media/${site.site_logo}`);
            const logo = await response.json();
            const header = document.querySelector('header');
            const headerLogo = document.createElement('img');
            headerLogo.setAttribute('id', 'site_logo')
            headerLogo.setAttribute('src', logo.guid.rendered);
            headerLogo.setAttribute('alt', logo.alt_text);
            header.appendChild(headerLogo);
        }
        if (site.site_logo !== 0) {
            getLogo();
        }

        const siteName = document.createElement('h1');
        const siteNameLink = document.createElement('a');
        siteName.setAttribute('id', 'site_name');
        siteName.classList.add('h1')
        siteNameLink.setAttribute('href', site.home);
        siteNameLink.innerHTML = site.name;
        siteName.appendChild(siteNameLink);
        header.appendChild(siteName);

        const siteDescription = document.createElement('div');
        siteDescription.setAttribute('id', 'site_description');
        siteDescription.innerHTML = site.description;
        header.appendChild(siteDescription);

        const siteIcon = document.createElement('link');
        siteIcon.setAttribute('rel', 'shortcut icon');
        siteIcon.setAttribute('href', site.site_icon_url);
        head.appendChild(siteIcon);
    }
}