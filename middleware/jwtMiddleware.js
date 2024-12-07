const jwt=require('jsonwebtoken')  //1st import jwtwebtoken

// authorization nadathan
const jwtMiddleware=(req,res,next)=>{
    console.log("Inside jwtMiddleware");
    
    // logic to authorize user
    const token=req.headers["authorization"].split(" ")[1]
    console.log(token);
    if(token){
        // verify
        try{
            const jwtResponse=jwt.verify(token,process.env.JWTPASSWORD)
            console.log(jwtResponse);
            req.userId=jwtResponse.userId
            next()
            
        }catch(err){
            res.status(401).json("authentication failed...please login!!!")
        }
    }else{
        res.status(404).json("Authentication failed....token is missing")
    }


}

module.exports=jwtMiddleware