
var services = require('../services/services');
exports.getConversion = (req,res) => {
    try{
    let obj = {
        unitType1:req.body.firstUnit,
        unitType2:req.body.secondUnit,
        unit:req.body.unitValue
    }
    console.log(obj);
    

    let response={}
    services.convert(obj,(err,data) => {
        if(err){
            response={
                success: "false",
                message: "Error occured"
            }
             res.status(200).send(response);
        }
        else{
            response={
                success:"true",
                message:"successfully calculated",
                data: data
            }            
            res.status(200).send(response)
            }
        })
    }
    catch(err){
        res.status(500).send({message:"internal error"})
    }
    }
    

