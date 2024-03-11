const mongoose = require('mongoose');

const Connection = async() =>{
    await mongoose.connect('mongodb+srv://vikashmishra8371:XkUmSZgIZcawfUcO@cluster0.ouwkxt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{console.log("connected to databasse")})
    .catch((err)=>console.log(err.message))

}

module.exports= Connection;