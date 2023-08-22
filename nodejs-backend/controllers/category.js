const Category = require('../models/category')

exports.getAllCategory = async (req, res, next) => {
    try {
        const [allCategory] = await Category.fetchAll();
        res.status(200).json(allCategory);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}