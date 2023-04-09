import express from "express"
// import {connect} from './connect'


const uri = 'mongodb+srv://huynhson181001:Conmeobeo19970@cluster0.8rraen6.mongodb.net/test'

const app = express();

app.get('/',(req,res)=>{
    res.json({
        
        
    })
})

(async function (){
  try {
    // connect(uri)
    app.listen(5000, () => {
      console.log("server is running...");
    });
  } catch (error) {
    console.error(error);
  }
})()

