const mongoose = require('mongoose');

const mongoDBUriString = process.env.MONGODB_URI_STRING;

mongoose
    .connect(mongoDBUriString)
    .then((response) => {
        console.log("E-Commerce Database connected");
    }).catch((err) => {
        console.log("connction error: ", err);
    });

