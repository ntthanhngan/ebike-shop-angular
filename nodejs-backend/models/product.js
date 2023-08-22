const db = require('../util/database');

module.exports = class Product {
    constructor(id, name, price, thumbnail, prodType, prodBrand, description, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        this.prodType = prodType;
        this.prodBrand = prodBrand;
        this.description = description;
        this.quantity = quantity

    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static getById(id) {
        return db.execute('SELECT products.name name, products.price, products.thumbnail, products.description, product_types.name typenam, product_img.url FROM products, product_types, product_img WHERE products.prod_type_id = product_types.id && product_img.pro_id = products.id && products.id = ? && product_img.types = 1', [id])
    }

    static post(name, price, prodType, prodBrand) {
        return db.execute('INSERT INTO products (name, price, prodType, prodBrand)' +
            'VALUES (?)', [name], [price], [prodType], [prodBrand]);
    }

    static post(name, quantity, price, prodType, prodBrand) {
        return db.execute('INSERT INTO products (name, quantity, price, prodType, prodBrand)' +
            'VALUES (?)', [name], [price], [quantity], [prodType], [prodBrand]);
    }

    static update(id, content, quantity) {
        return db.execute('UPDATE products SET content = ?, quantity = ? WHERE id = ?', [content, quantity, id]);
    }

    static update(id, thumbnail, content, quantity) {
        return db.execute('UPDATE products SET content = ?, quantity = ?, thumbnail = ? WHERE id = ?', [content, quantity, thumbnail, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM products WHERE id = ?', [id]);
    }

    static getProdRandom(lmt) {
        return db.execute('SELECT products.name name, products.price, products.thumbnail, products.description, product_types.name typenam, product_img.url FROM products, product_types, product_img WHERE products.prod_type_id = product_types.id && product_img.pro_id = products.id && products.id = ? && product_img.types = 1 ORDER BY RAND() LIMIT 6', [id])
    }

    static search(query) {
        return db.execute(`SELECT * FROM products WHERE name LIKE '%${query}%'`)
    }

    static paginate(start, pageSize) {
        return db.execute(`SELECT * FROM products LIMIT ${start}, ${pageSize}`)
    }
};