// import express from "express" ;
// const app = express() ;

// app.get('/',(req,res)=>{
//   res.send("server is ready") ;
// })

// const port = process.env.PORT|| 3000 ;

// app.listen(port,()=>{
//   console.log('i am serving backend services');
  
// })

import express from "express" ;
const app = express() ;
app.get('/',(req, res)=>{
  res.send('server running') ;
})

const port = process.env.port || 3000 ;
app.listen(port,()=>{
  console.log('learning bacend');
})