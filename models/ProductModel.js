const sql = require('./db')

const Products = function(product) {
    this.prodName = product.prodName;
    this.prodDescription = product.prodDescription;
    this.category = product.category;
    this.price = product.price;
    this.prodQuantity = product.prodQuantity;
    this.imgURL = product.imgURL;
    this.userID = product.userID;
};

Products.create =(newProduct, result) => {
    sql.query("INSERT INTO Products SET ?", newProduct,(err, res)=>{
        if(err) {
            console.log("error: ", err);
            result(err, null)
            return;
        }
        console.log("created product: ", { id: res.insertId, ...newProduct});
        result(null, { id: res.insertId, ...newProduct});
    })
};

Products.findById = (id, result) => {
    sql.query(`SELECT * FROM Products WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };

Products.getAll = (prodName, result) => {
    let query = "SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL, userID FROM Products";
    if (prodName) {
        query += `WHERE prodName LIKE '%${prodName}%'`;
    }

    sql.query(query,(err, res)=> {
        if(err) {
            console.log("error", err);
            result(null, err);
            return;
        }

        console.log("Products: ", res);
        result(null, res);
    })
};

Products.updateById = (id, product, result) => {
    sql.query('UPDATE Products SET prodName = ?, prodDescription = ?, category = ?, price = ?, prodQuantity = ?, imgURL = ?, userID = ? WHERE id = ?', [product.prodName, product.prodDescription, product.category, product.price, product.prodQuantity, product.imgURL, product.userID, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  )
};

Products.remove = (id, result) => {
    sql.query("DELETE FROM Products WHERE id =?", id, (err, res) => {
        if(err) {
            console.log("error: ", err)
            result(null, err);
            return;
        }
        if(res.affectedRows == 0) {
            result({ kind:"not found"}, null)
            return;
        }
        console.log("deleted product with id: ", id);
        result(null, res);
    })
}

module.exports = Products

