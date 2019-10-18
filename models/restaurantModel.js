const db = require('./conn');

class ExecutiveList {
    constructor(name, catecory) {
        this.name = name;
        this.catecory = catecory;
    }

    static async getAll() {
    //     db.any('SELECT * FROM restaurant;').then(response  => {
    //         console.log('response', response);
    //     });
    
        try {
            const response = await db.any(`SELECT * FROM restaurant`);
            console.log('response', response);
            return response;

        } catch(error) {
            return error.message
        }
    }
}
module.exports = ExecutiveList;
