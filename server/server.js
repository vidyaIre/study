const express = require('express');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());

const dbConfig = require('./config/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',productRoute);
app.use('/api',userRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})