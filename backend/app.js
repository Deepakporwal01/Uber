import express from "express";
import dotenv from "dotenv";

dotenv.config();

import cors from "cors";


const app = express();


app.use(cors(
    {
        origin: ["http://localhost:3000"],
        
    }
));

app.get('/',(req,res)=>{
    res.send('Hello World');
})


export default app 
 