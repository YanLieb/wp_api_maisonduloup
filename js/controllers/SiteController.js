import Site from '../classes/Site.js';
import Medias from '../classes/Medias.js';

export default class SiteController {
    constructor() {
        this.site = new Site();
        this.medias = new Medias();
    }

    async getSite() {
        const site = await this.site.fetchSite();
        console.log(site.name);
        console.log(site.description);
        console.log(site.home);
        console.log(site.site_icon_url);

        const header = document.querySelector('header');
        const head = document.querySelector('head');

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

    async getLogo() {
        const medias = await this.medias.fetchMedias();
        const site = await this.site.fetchSite();
        let logo = '';
        medias.forEach(media => {
            if (media.id == site.site_logo) logo = media;
        })

        const header = document.querySelector('header');
        const headerLogo = document.createElement('img');
        headerLogo.setAttribute('id', 'site_logo')
        headerLogo.setAttribute('src', logo.guid.rendered);
        headerLogo.setAttribute('alt', logo.alt_text);
        header.appendChild(headerLogo);
    }
}