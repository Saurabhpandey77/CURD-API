const Product = require("../models/product") 
const getAllProuducts = async(req, res)=>{
    const productdata = await Product.find({});
    res.status(200).json({productdata});
}
const createProduct = async(req, res)=>{
    if (!req.body.name) {
        res.status(400).send({ message: "name can not be empty!" });
        return;
      }
      const doc =await Product.create({name: req.body.name,
        img : req.body.img,
        summary : req.body.summary})
      await doc.save();
    
}
const getOneProuducts = async(req,res)=>{
    const productdata =await Product.findById(req.params.id)
    res.status(200).json({productdata});

}
const updateProuducts = async(req,res)=>{
    const productdata =await Product.findById(req.params.id)
    productdata.name = req.body.name
    const a1 = await productdata.save()
    res.status(200).json({a1});

}
const deleteProuducts= async(req,res)=>{
    const productdata =await Product.findById(req.params.id)
    const a1 = await productdata.deleteOne()
    res.status(200).json({a1});

}



module.exports={getAllProuducts,createProduct,getOneProuducts,updateProuducts,deleteProuducts};