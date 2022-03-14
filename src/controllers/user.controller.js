const experss = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("", async(req,res)=>{
    try{
        const post = await user.create(req.body);
        return res.send(post);
    }catch(e){
        return res.send(e);   
    };
});

router.get("", async(req,res)=>{
    try{
        const allusers = await user.find().lean().exec();
        return res.send(allusers);
    }catch(e){
        return res.send(e);   
    };
});
router.get("/:id", async(req,res)=>{
    try{
        const oneuser = await user.findById(res.params.Id).lean().exec();
        return res.send(oneuser);
    }catch(e){
        return res.send(e);   
    };
});

router.patch("/:id", async(req,res)=>{
    try{
        const chuser = await user.findByIdAndUpdate(res.params.Id, req.body,{
            new: true,
        });
        return res.send(chuser);
    }catch(e){
        return res.send(e);   
    };
});

router.delete("", async(req,res)=>{
    try{
        const deluser = await user.findByIdAndDelete(res.params.Id);
        return res.send(deluser);
    }catch(e){
        return res.send(e);   
    };
});

module.exports = router;