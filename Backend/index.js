import express from "express" ;

const app = express() ;
const jokes = [
  {
    id:1,
    name:"joke 1" ,
    des:"joke of the app"
  },
  {
    id:2,
    name:"joke 2" ,
    des:"joke of the app"
  },
  {
    id:1,
    name:"joke 3" ,
    des:"joke of the app"
  },
]
app.get('/api/jokes',(req,res)=>{
  res.send(jokes) ;
})

const port = process.env.port || 3000 ;

app.listen(port,()=>{
  console.log("server is listening");
})