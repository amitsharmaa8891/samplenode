exports.notFound = function(req, res) {
    console.log("not found");
    res.status(404)
    res.json({
        error: 'not found',
        url: req.originalUrl
    })
}

exports.after = function(req, res) {
    console.log("this is after");

}

exports.methodNotAllowed = function(req, res) {
    res.status(405)
    res.json({
        error: 'Method Not Allowed',
        url: req.originalUrl
    })
}
