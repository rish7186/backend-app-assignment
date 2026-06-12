const db = require("../config/db");

exports.getProducts = (req, res) => {

  db.query(
    "SELECT * FROM products",
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);

    }
  );

};

exports.createProduct = (req, res) => {

  const { name, description, price } = req.body;

  db.query(
    "INSERT INTO products(name,description,price) VALUES(?,?,?)",
    [name, description, price],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Product Created"
      });

    }
  );

};

exports.updateProduct = (req, res) => {

  const { id } = req.params;
  const { name, description, price } = req.body;

  db.query(
    "UPDATE products SET name=?, description=?, price=? WHERE id=?",
    [name, description, price, id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Product Updated"
      });

    }
  );

};

exports.deleteProduct = (req, res) => {

  const { id } = req.params;

  db.query(
    "DELETE FROM products WHERE id=?",
    [id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Product Deleted"
      });

    }
  );

};