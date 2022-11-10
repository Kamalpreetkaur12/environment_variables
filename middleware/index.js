export const errorHandler = (error, req, res, next) => {
    
    res.status(error.status || 400).send(error.message || "Can't find multiplier.");
  };
  
  export const unknown =(req,res,next)=>{
  
  const err =new Error("Route Unknown")
  err.status=404
  
  next(err)
  }