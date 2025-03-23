const express = require('express');
const productRoute = require('./routes/productRoute');
const app = express();
require('dotenv').config();

const dbConfig = require('./config/index');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',productRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})