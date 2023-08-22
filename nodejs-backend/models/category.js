const db = require('../util/database')

module.exports = class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }

    static fetchAll() {
        return db.execute('SELECT name FROM product_types')
    }
}