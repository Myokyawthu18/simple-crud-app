const Product = require('../models/product.model');



const getProducts = async (req, res) => {
    async(req, res)=>{
       try{
           const products = await Product.find();
           res.status(200).json(products);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
}

}

const getProduct = async(req, res) => {
       try{
           const products = await Product.find();
           res.status(200).json(products);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
};

const createProduct = async(req, res)=> {
       try{
              const product = await Product.create(req.body);
              res.status(201).json(product);  
         } catch(error){
              res.status(400).json({message: error.message});
         }
};

const updateProduct = async(req, res) => {
    try {
            const {id} = req.params;
            const updateProduct = await Product.findByIdAndUpdate(id, req.body,   { new: true, runValidators: true });
    
            if(!updateProduct){
                return res.status(404).json({message: "Product not found"});
            }
            res.status(200).json(updateProduct);
    
        } catch (error){
            res.status(500).json({message: error.message});
        }
};

const deletedProduct = async(req, res) => {
     try{
            const {id} = req.params;
            const deletedProduct = await Product.findByIdAndDelete(id);
            if(!deletedProduct){
                return res.status(404).json({message: "Product not found"});
            }
    
            res.status(200).json({message: "Product deleted successfully", 
            product: deletedProduct
    });
    
        } catch(error) {
            res.status(500).json({message: error.message});
        }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deletedProduct

}

