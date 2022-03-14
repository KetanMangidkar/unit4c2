const experss = require("express");

const userController = require("./controllers/user.controller");


const connect = require("./configs/db");

const app = experss();
app.use(experss.json());

app.use("/user", userController);



app.listen(9555, async function(){
   try{
      await connect();
      console.log("listening on port 9555");
   } catch(e){
      console.log("error is", e.message);
   }
});






// firstName (required)
// middleName (optional)
// lastName (required)
// age (required)
// email (required )
// address ( required )
// gender ( optional and should default to Female )
// type (optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt (required)
// updatedAt (required)