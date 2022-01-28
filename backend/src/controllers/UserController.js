const connection = require ('../database/connection')

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    async cadastro(req, res) {
        const response = {...responseModel}

        const { username, password } = req.body;

        const[, affectRows] = await connection.query(`
            INSERT INTO users VALUES (DEFAULT, '${username}', '${password}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return res.json(response)
    },

    async login(req, res) {
        const response = {...responseModel}

        const { username, password } = req.body;

        const [, data] = await connection.query(`
            SELECT * FROM users WHERE username='${username}' AND password='${password}'
        `)

        response.success = data.length > 0

        return res.json(response)
    },
    
    async cadastroprod(req, res) {
        const response = {...responseModel}

        const { product } = req.body;

        const[, affectRows] = await connection.query(`
            INSERT INTO products VALUES (DEFAULT, '${product}', NOW(), NOW())
        `)

        response.success = affectRows > 0

        return res.json(response)
    },
    
    async listaprod(req, res) {
        try{
        const response =  await connection.query(`
            SELECT * FROM products`)
        return res.json(response[0])
        }catch (error) {
            console.log(error);
        }
    },

    async todoscadastros(req, res) {
        try{
        const response =  await connection.query(`
            SELECT * FROM users`)
        return res.json(response[0]);
        }catch (error) {
            console.log(error);
        }
    },

    async deletarcadastros(req, res) {
       const id = req.params.id;

       try {
           const response = await connection.query(`
            DELETE FROM users WHERE id= ${id}`);
            res.json(response);
       } catch (error) {
           console.log(error)
       }
    },

    async deletarprod(req, res) {
        const id = req.params.id;
 
        try {
            const response = await connection.query(`
             DELETE FROM products WHERE id= ${id}`);
             res.json(response);
        } catch (error) {
            console.log(error)
        }
     },

     async atualizarprod(req, res) {
        const id = req.params.id;
        const { product } = req.body;
 
        try {
            const response = await connection.query(`
            UPDATE products SET product = '${product}' WHERE id = ${id}`);
             res.json(response);
        } catch (error) {
            console.log(error)
        }
     },

     async atualizarcadastro(req, res) {
        const id = req.params.id;
        const { username, password } = req.body;
 
        try {
            const response = await connection.query(`
            UPDATE users SET username = '${username}', password = '${password}' WHERE id = ${id}`);
             res.json(response);
        } catch (error) {
            console.log(error)
        }
     }
    
}