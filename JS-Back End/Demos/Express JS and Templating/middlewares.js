const cats = [];

exports.catsMiddleware = (req, res, next) => {
    req.cats = cats;
    console.log('Cats Middleware');
    next();
}