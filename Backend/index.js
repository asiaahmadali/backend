import express from 'express' ;
const app = express() ;

const jokes = [
  {
    id:'joke 1',
    des:'it is joke 1 description'
  },
  {
    id:'joke 2',
    des:'it is joke 2 description'
  },
  {
    id:'joke 3',
    des:'it is joke 3 description'
  },
  {
    id:'joke 4',
    des:'it is joke 4 description'
  },
]

app.get('/jokes',(req, res)=>{
     res.send(jokes) ;
})

app.get('/',(req,res)=>{
  res.send('server is ready okkk got it') ;
})

const port = process.env.port || 3000 ;

app.listen(port,()=>{
  console.log("server is listening");
  
})