import express, {Router, Request, Response} from "express";

const route = express.Router();

route.get("/greet", (req:Request, res:Response)=>{
res.send("Hi guys")    
})
export default route;