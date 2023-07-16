import Menu from "../classes/Menu.js";

export default class MenuController {
    constructor() {
        this.menu = new Menu();
        this.menuHTMLElement = this.createMenuHTMLElement();
    }

    createMenuHTMLElement() {
        const menuHTMLElement = document.createElement('menu');
        menuHTMLElement.setAttribute('id', 'menu');
        return document.querySelector('body').appendChild(menuHTMLElement);
    }

    async getMenu() {
        const menuElements = await this.menu.fetchMenu();
        menuElements.forEach(menuElement => {
            const menuListHTMLElement = document.createElement('li');
            menuListHTMLElement.classList.add('menu-item');
            menuListHTMLElement.innerHTML = `<a href="${menuElement.url}/?p=${menuElement.object_id}">${menuElement.title}</a>`;

            this.menuHTMLElement.appendChild(menuListHTMLElement);
        })
    }
}