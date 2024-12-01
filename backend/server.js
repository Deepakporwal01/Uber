import http from "http";
import app from "./app.js";
import dotenv from "dotenv"
dotenv.config();
const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port,()=>{
    `server is running on port" ${port}`;
});
