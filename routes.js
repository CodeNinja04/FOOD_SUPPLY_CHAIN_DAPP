const routes = require('next-routes')();

routes
.add('/hello/show','/show')
.add('/supply-chain/new','supply_chain/new');

module.exports = routes;