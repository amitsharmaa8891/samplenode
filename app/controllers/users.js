var db = require('../core/db.js')
var PER_PAGE = 10
exports.usersOrder = function(req, res, next){
  var customer_id = req.params.customer_id
  db.query("select * from orders as O JOIN customers as C ON C.customerNumber = O.customerNumber WHERE O.customerNumber = " + customer_id, function(err,rows){
    if (err) res.send('Something went wrong.') // database

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}

exports.product = function(req, res, next){
  var product_id = req.params.product_id
  db.query("select * from products WHERE productCode = '" + product_id +"'",function(err,rows){
    if (err) res.send('Something went wrong.') // database

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}
