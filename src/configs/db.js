const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect("mongodb+srv://ketandb:ketan9555@cluster0.5oxuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
