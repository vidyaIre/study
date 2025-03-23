

const productModel = require('../models/productModel');

module.exports = {
    addProduct: async (req, res) => {
        try {
            const { name, description, price, image, category, brand, stock } = req.body;
            console.log(name, description, price, image, category, brand, stock);
            if (name && description && price && image && category && brand && stock) {
                const newProduct = await productModel({
                    name,
                    description,
                    price,
                    image,
                    category,
                    brand,
                    stock
                });
                newProduct.save()
                    .then((response) => {
                        console.log("response:", response);

                        return res.status(201).json({
                            success: true,
                            statusCode: 201,
                            message: "product added successfully",
                            data: response
                        });
                    }).catch((error) => {
                        console.log("error:", error);

                        if (error.code === 11000) {
                            res.status(200).json({
                                success: false,
                                statusCode: 200,
                                message: "product already exists"
                            });
                        } else {
                            res.status(200).json({
                                success: false,
                                statusCode: 200,
                                message: "product adding failed"
                            });
                        }
                    })
            } else {
                res.status(200).json({
                    success: false,
                    statusCode: 200,
                    message: "missing required fields "
                });
            }

        } catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "internal server error"
            });
        }
    },
    getProduct: async (req, res) => {
        try {
            const products = await productModel.find({ isDeleted: false }).lean();

            return res.status(200).json({
                success: true,
                statusCode: 200,
                count: products.length,
                message: "products fetched successfully",
                data: products
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "internal server error"
            });
        }

    },
    updateProduct: async(req, res) => {
        try {
            const productId = req.params.id;
            const updatedData = req.body;
    
            console.log("productId:", productId);
            console.log("updatedData:", updatedData);
            console.log("req.body:", req.body.id);
    
            const response = await productModel.updateOne(
                { _id: productId },
                { $set: updatedData }
            );
    
            if (response.matchedCount === 0) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found"
                });
            }
    
            if (response.modifiedCount === 0) {
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    message: "No changes made to the product",
                    data: response
                });
            }
    
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product updated successfully",
                data: response
            });
        }
         catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "internal server error"
            });
        }
    }
}
