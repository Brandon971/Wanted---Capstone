const Cart = require("../models/CartModel");
// Create and Save a new Cart
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Add a Cart
    const cart = new Cart({
        userID: req.body.userID,
        id: req.body.id,
    });
    // Save Cart in the database
    Cart.create(cart, (err, data) => {
        if (err){
            res.status(500).json({
                message:
                    err.message || "Some error occurred while adding to the cart."
            });
        } else{
            const userData = data;
            res.status(200).json({
                userData,
                message: 'added to cart successfully',
            });
        }
    });
};
// Retrieve all Cart from the database (with condition).
exports.findAll = (req, res) => {
    const cartID = req.params.id;
    Cart.getAll(cartID , (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cart."
            });
        else res.send(data);
    });
};
// Update a Cart identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Cart.updateById( req.params.id , new Cart(req.body),(err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Item with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Item with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};
// Delete a Cart with the specified id in the request
exports.delete = (req, res) => {
    Cart.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Cart with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Cart with id " + req.params.id
                });
            }
        } else res.send({ message: `Restaurant was deleted successfully from Cart!` });
    });
};
exports.deleteAll = (req, res) => {
    const name = req.query.prodName
    Cart.removeAll(name, (err, data) => {
        if(err) {
            if(err.kind === "Not_found") {
                res.status(404).send({
                    message: "No items found."
                });
            } else {
                res.status(500).send({
                    message: 'Could not delete items'
                });
            }
        } else res.send(data);
    })
}