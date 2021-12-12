require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json())

app.use('/api/products', productRoutes);

// == Step deploy:
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))

    // == Code below let to refresh the page and save the state of the products:
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));