const{ Router } = require('express');


const DevController = require('./controllers/DevController');
const searchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);



routes.get('/search', searchController.index);

module.exports = routes;