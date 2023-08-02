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
    }

    async getLogo() {
        const medias = await this.medias.fetchMedias();
        const site = await this.site.fetchSite();
        let logo = '';
        medias.forEach(media => {
            if (media.id == site.site_logo) logo = media;
        })
        console.log(`<img src="${logo.guid.rendered}" alt="${logo.alt_text}" width="${logo.media_details.width}">`);
    }
}