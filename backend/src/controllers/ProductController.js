const db = require('../database/connection');

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;
      const products = await db.query(`SELECT * FROM product LIMIT 10 OFFSET (${page} - 1) * 10`); 
      
      return res.json(products.rows);
    } catch (err) {
      console.log('ERROR');
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;

      const product = await db.query(`SELECT * FROM product WHERE id = ${id} LIMIT 1`)

      return res.json(product.rows)
    } catch (err) {
      console.log('ERROR');
    }
  },

  async store(req, res) {
    try {
      const { title, description, url } = req.body;
      
      await db.query(
        'INSERT INTO product(title, description, url) VALUES($1, $2, $3)', 
        [title, description, url]
      );
      
      return res.send('SUCCESS!');
    }catch (err) {
      console.log('ERROR');
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, description, url } = req.body;

      if(title){
        await db.query(
          `UPDATE product SET title = $1 WHERE id = $2`, [title, id]
        );
      }

      if(description){
        await db.query(
          `UPDATE product SET description = $1 WHERE id = $2`, [description, id]
        );
      }

      if(url){
        await db.query(
          `UPDATE product SET url = $1 WHERE id = $2`, [url, id]
        );
      }
      
      return res.send('SUCCESS!');
    } catch (err) {
      console.log('ERROR');
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await db.query(`DELETE FROM product WHERE id = ${id}`);

      return res.send('SUCCESS!');
    } catch (err) {
      console.log('ERROR');
    }
  }
}