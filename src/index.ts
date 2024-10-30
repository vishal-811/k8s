import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.get('/check', (req,res)=>{
    res.json({msg:"Healthy, The server is fine"});
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})