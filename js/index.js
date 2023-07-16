import MenuController from './controllers/MenuController.js';
import PageController from './controllers/PageController.js';

const menu = new MenuController();
menu.getMenu();
const pageContent = new PageController();
pageContent.getHomePageContent();
