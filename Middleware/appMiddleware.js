// define application specific middleware

const appMiddleware = (req,res,next)=>{
    console.log("Application specific middleware");
    next()
}
module.exports={
    appMiddleware
}