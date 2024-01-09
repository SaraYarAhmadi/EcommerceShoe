import express from 'express';
import productsModel from '../model/productsModel';
const productRouter = express.Router();
const multer = require('multer');
// const uploads = multer({ dest: 'uploads/images/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/uploads/images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const uploads = multer({ storage: storage })

//get all product
productRouter.get("/getAllProduct", async (req, res) => {
    const allProducts = await productsModel.find({})
    console.log(allProducts);
    res.send(allProducts)
})

// Get Product By id
productRouter.get("/getProduct/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const product = await productsModel.findById(id);
    console.log(product);
    res.send(product);
})

// Save/Post New Products
productRouter.post("/addNewProduct", uploads.single('productImage'), async (req, res) => {
    console.log("testtttt-asassssssss---------------------------------------------sssssssss", req.file);
    const { title, description, } = req.body;
    const newProductModel = {
        title,
        description,
        image: req.file.filename
    };

    const newProduct = new productsModel(newProductModel);

    await newProduct.save()
        .then(() => res.send('Save Is Ok'))
})

export default productRouter

