var db = require('../core/db.js')

exports.products = function(req, res, next){
  console.log(JSON.stringify(req.query['q']))
  var serach = ''
  if (req.query['q'])
    search = 'WHERE productName LIKE "%' + req.query["q"] + '%"'
  var PER_PAGE = req.query['limit']
  var page = req.query['offset']
  var skip = PER_PAGE * (page - 1);
  var sql = "select * from products "+ search+" LIMIT " + parseInt(skip) + ", " + PER_PAGE
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
