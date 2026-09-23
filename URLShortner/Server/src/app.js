import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();
import connectDB from "./config/db.js";
import urlRoutes from "./routes/url.routes.js" 
import  generateCode from "./Utils/generatetoken.js" 

const app = express();

connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Radhe Radhe")
})

app.use("/api/url", urlRoutes)   

export default app;