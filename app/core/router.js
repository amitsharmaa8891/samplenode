var restify = require('restify');
var fs = require('fs');
var settings = require('../../settings.js')

var controllers = {}
    , controllers_path = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();
server.use(restify.plugins.queryParser());
//Error handler
server.on('NotFound', controllers.error.notFound);
server.on('MethodNotAllowed', controllers.error.methodNotAllowed);

// products
server.get(settings.API_V + '/products', controllers.products.products)
server.get(settings.API_V + '/product/:product_id', controllers.products.product)
server.get(settings.API_V + '/product_lines', controllers.products.productLines)

// orders
server.get(settings.API_V + '/order/:order_id', controllers.orders.order)

// customers
server.get(settings.API_V + '/customers/:customer_id/orders', controllers.users.usersOrder)

server.listen(settings.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
