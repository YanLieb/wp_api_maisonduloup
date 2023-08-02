import MenuController from './controllers/MenuController.js';
import PageController from './controllers/PageController.js';
import SiteController from './controllers/SiteController.js';

const site = new SiteController();
site.getSite();
site.getLogo();
const menu = new MenuController();
menu.getMenu();
const pageContent = new PageController();
pageContent.getHomePageContent();
