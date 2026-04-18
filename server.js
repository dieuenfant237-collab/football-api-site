
const express=require("express")
const fetch=require("node-fetch")
const app=express()
app.use(express.json())
app.use(express.static("."))

app.post("/api/predict",async(req,res)=>{
const{team1,team2}=req.body
try{
const response=await fetch("https://game-forecast.p.rapidapi.com/match",{
method:"POST",
headers:{
"Content-Type":"application/json",
"X-RapidAPI-Key":"TA_CLE_API_ICI",
"X-RapidAPI-Host":"game-forecast.p.rapidapi.com"
},
body:JSON.stringify({team1,team2})
})
const data=await response.json()
res.json(data)
}catch(e){
res.json({error:"API error"})
}
})

app.listen(3000)
