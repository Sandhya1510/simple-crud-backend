const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routers/product.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))


//routes
app.use('/api/products',productRoute);


app.get('/',(req, res) => {
    res.send("Hello from Node API server updated")
});



// app.get('/api/products', async (req,res) => {

//     try{
//         const product = await Product.find({});
//         res.status(200).json(product);
//     }catch (error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.get('/api/products/:id', async (req,res) => {

//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }catch (error){
//         res.status(500).json({message:error.message});
//     }
// });



// app.post('/api/products',async(req,res) =>{
//     // console.log(req.body);
//     // res.send(req.body)
//     try{
//       const product = await Product.create(req.body);
//       res.status(200).json(product);
    
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// });


// app.put('/api/products/:id', async (req,res) => {

//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//        if (!product){
//         return res.status(404).json({message: "Product not found"})
//        }

//       const updatedProduct =  await Product.findById(id);
//       res.status(200).json(updatedProduct);

//     }catch (error){
//         res.status(500).json({message:error.message});
//     }
// });


// app.delete('/api/products/:id', async (req,res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);

//         if (!product){
//             return res.status(404).json({message: "Product not found"})
//            }
//         res.status(200).json({message: "Product deleted successfuly" });
           
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })

mongoose.connect("mongodb+srv://sandhyak:Daddy@backendb.zcslt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackenDB")
.then(() =>{
    console.log("Connected to database")
    app.listen(3000, () => {
        console.log("SErver is running on port 3000");
        
    })
})
.catch(() =>{
    console.log("Connection failed");  
});


