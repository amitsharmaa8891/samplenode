var db = require('../core/db.js')
var PER_PAGE = 10
exports.usersOrder = function(req, res, next){
  var customer_id = req.params.customer_id
  var sql = "select O.*, C.*,  (SELECT SUM(OD.quantityOrdered * OD.priceEach) FROM orderdetails as OD WHERE OD.orderNumber = O.orderNumber) as total from orders as O JOIN customers as C ON C.customerNumber = O.customerNumber WHERE O.customerNumber = " + customer_id
  db.query(sql, function(err,rows){
    if (err) res.send('Something went wrong.') // database

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}
