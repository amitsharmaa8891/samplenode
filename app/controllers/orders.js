var db = require('../core/db.js')
var PER_PAGE = 10
exports.orders = function(req, res, next){
  var page = req.params.page
  var skip = PER_PAGE * (page - 1);
  db.query("select * from orders LIMIT " + parseInt(skip) + ", 10",function(err,rows){
    if (err) res.send('Something went wrong.') // database

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}

exports.order = function(req, res, next){
  var order_id = req.params.order_id
  var sql = "select * from orders WHERE orderNumber = '" + order_id +"'"
  console.log(sql);
  db.query(sql,function(err,rows){
    if (err) res.send('Something went wrong.') // database
    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}
