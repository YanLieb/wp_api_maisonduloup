import MenuController from './controllers/MenuController.js';
import PageController from './controllers/PageController.js';
import SiteController from './controllers/SiteController.js';

const site = new SiteController();
const menu = new MenuController();
const pageContent = new PageController();
site.getSite();
site.getLogo();
menu.getMenu();
pageContent.getHomePageContent();
