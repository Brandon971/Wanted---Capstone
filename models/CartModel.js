const sql = require('./db')

const Cart = function(cart) {
    this.id = cart.id
    this.userID = cart.userID;
};

Cart.create =(cart, result) => {
    sql.query("INSERT INTO Cart (id, userID) values(?, ?)", [cart.id, cart.userID],(err, res)=>{
        if(err) {
            console.log("error: ", err);
            result(err, null)
            return;
        }
        console.log("created cart: ");
        result(null,res);
    })
};



Cart.getAll = (userID, result) => {
    let query = "select c.CartID, u.userID, p.prodName,p.prodQuantity, p.category, p.price, p.imgURL from Cart c inner join Products p on c.id = p.id inner join Users u on c.userID = u.userID ";
    if (userID) {
        query += `WHERE u.userID LIKE '%${userID}%'`;
    }

    sql.query(query, (err, res)=> {
        if(err) {
            console.log("error", err);
            result(null, err);
            return;
        }

        console.log("Cart: ", res);
        result(null, res);
    })
};

// Cart.updateById = (id, product, result) => {
//     sql.query('UPDATE Cart SET , prodQuantity = ?, imgURL = ? WHERE cartID = ?', [  product.prodQuantity, product.userID, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated product: ", { id: id, ...product });
//       result(null, { id: id, ...product });
//     }
//   )
// };

Cart.remove = (cartID, result) => {
    sql.query("DELETE FROM Cart WHERE cartID =?", cartID, (err, res) => {
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

Cart.removeAll = (cartID, result) => {
    sql.query("TRUNCATE TABLE Cart", cartID, (err, res) => {
        if(err) {
            console.log(err);
            result(err,null);
        }
        console.log("deleted all cart: ", id);
        result(null, res);
    })
}

module.exports = Cart

