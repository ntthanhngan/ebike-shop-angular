const db = require('../util/database');

module.exports = class Product {
    constructor(acc_id, prod_id, quantity) {
        this.acc_id = acc_id;
        this.prod_id = prod_id;
        this.quantity = quantity;

    }

    static getById(acc_id) {
        return db.execute('SELECT * FROM cart_details ', [acc_id]);
    }

    static post(acc_id, pro_id, quantity) {
        return db.execute('INSERT INTO shopping_cart (acc_id, pro_id, quantity)' +
            'VALUES (?)', [acc_id, pro_id, quantity]);
    }

    static update(acc_id, pro_id, quantity) {
        return db.execute('UPDATE shopping_cart SET pro_id = ?, quantity = ? WHERE acc_id = ?', [pro_id, quantity, acc_id]);
    }

    static delete(acc_id, pro_id) {
        return db.execute('DELETE FROM shopping_cart WHERE acc_id = ? && pro_id = ?', [acc_id, pro_id]);
    }
};