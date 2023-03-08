const Product = require("../models/ProductModel");

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Cannot be empty !!"
        });
    }
    const product = new Product({
        prodName: req.body.prodName,
        prodDescription: req.body.prodDescription,
        category: req.body.category,
        price: req.body.price,
        prodQuantity: req.body.prodQuantity,
        imgURL : req.body.imgURL,
        userID: req.body.userID
    });

    Product.create(product,(err, data) => {
        if(err)
        res.status(500).send({
            message : err.message || "Error occured while creating a Product"
        });
        else res.send(data);
    });
};

exports.findAll =(req, res) => {
    const prodName = req.query.prodName;
    Product.getAll(prodName, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error occured while retrieving products"
        })
        else res.send(data);
    })
};

exports.findOne = (req, res) => {
    Product.findById(req.params.id,(err, data) => {
        if(err) {
            if(err.kind ==="not_found") {
                res.status(404).send({
                    message:`Not found id ${req.params.id}`
                });
            }
        }
        else res.send(data)
    })
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message:"Cannot be empty"
        })
    }
    console.log(req.body);
    Product.updateById(
        req.params.id,
        
        new Product(req.body),
        (err,data)=>{
            if(err) {
                if(err.kind ==="not_found") {
                    res.status(400).send({
                        message:`Not found ${req.params.id}`
                    })
                }else{
                    res.status(500).send({
                        message: "Error Updating product with id"  + req.params.id
                    })
                }
            }else res.send(data)
        }
    )
};

exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if(err) {
            if (err.kind ==="not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}`
                })
            }else {
                res.status(500).send({
                    message: "Error deleting Product with id" + req.params.id
                });
            }
        } else res.send({ message : `Product was deleted successfully!`});
    });
}