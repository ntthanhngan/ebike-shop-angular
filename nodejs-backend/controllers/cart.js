const Cart = require('../models/cart');

/* exports.getAllCart = async (req, res, next) => {
    try {
        const [allCart] = await Cart.fetchAll();
        res.status(200).json(allCart);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
} */

exports.getCartByAccId = async (req, res, next) => {
    try {
        const [cartId] = await Cart.getById(req.params.id);
        res.status(200).json(cartId);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};

exports.postCart = async (req, res, next) => {
    try {
        const postResponse = await Cart.post(req.body.item);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putCart = async (req, res, next) => {
    try {
        const putResponse = await Cart.update(req.body.id, req.body.item);
        res.status(200).json(putResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteCart = async (req, res, next) => {
    try {
        console.log(res.params)
        const deleteResponse = await Cart.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
