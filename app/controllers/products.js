var db = require('../core/db.js')
var settings = require('../../settings.js')

exports.products = function(req, res, next){
  console.log(JSON.stringify(req.query));
  var PER_PAGE = req.query['limit']
  var page = req.query['offset']
  var skip = PER_PAGE * (page - 1);
  var search = ''
  if (req.query['q'])
    search = 'WHERE productName LIKE "%' + req.query["q"] + '%"'
  var sql = "select * from products "+ search +" LIMIT " + parseInt(skip) + ", " + PER_PAGE
  // console.log(sql);
  db.query(sql,function(err,rows){
    if (err) res.send('Something went wrong.')

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}

exports.product = function(req, res, next){
  var product_id = req.params.product_id
  db.query("select * from products WHERE productCode = '" + product_id +"'",function(err,rows){
    if (err) res.send('Something went wrong.')

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}

exports.productLines = function(req, res, next){
  var product_id = req.params.product_id
  db.query("select * from productlines",function(err,rows){
    if (err) res.send('Something went wrong.')

    res.header('content-type', 'json')
    res.send(200, rows)
    next()
  })
}
