const Product = require('../models/product');

exports.getAllProducts = async (req, res, next) => {
    try {
        const [allCustomers] = await Product.fetchAll();
        res.status(200).json(allCustomers);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getProductById = async (req, res, next) => {
    try {
        const [productId] = await Product.getById(req.params.id);
        res.status(200).json(productId);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};

exports.postProducts = async (req, res, next) => {
    try {
        const postResponse = await Product.post(req.body.item);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putProduct = async (req, res, next) => {
    try {
        const putResponse = await Product.update(req.body.id, req.body.item);
        res.status(200).json(putResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const deleteResponse = await Product.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getRandomProd = async (req, res, next) => {
    try {
        const randProd = await Product.getProdRandom(req.params);
        console.log(randProd)
        res.status(200).json(randProd)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

//search product
exports.searchProduct = async (req, res, next) => {
    try {
        const { query } = req.body
        const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const results = await Product.search(escapedQuery)
        res.status(200).send(results[0])
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            res.status(500).send('Something went wrong');
        }
        next(err);
    }
}

//pagination
exports.paginateProduct = async (req, res, next) => {
    try {
        const page = req.query.page;
        const pageSize = req.query.pageSize;
        const start = (page - 1) * pageSize;
        const query = await Product.paginate(start, pageSize)
        res.status(200).send(query)
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            res.status(500).send('Something went wrong');
        }
        next(err);
    }
}