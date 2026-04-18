const express = require("express")
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
res.send("API Football fonctionne 🚀")
})

app.post("/predict",(req,res)=>{
const {home,away}=req.body

const scores=["1-0","2-1","1-1","2-0"]
const corners=["8-4","9-5","7-6","10-3"]
const cards=["2-1","3-2","1-2","2-2"]

res.json({
home,
away,
score:scores[Math.floor(Math.random()*scores.length)],
corners:corners[Math.floor(Math.random()*corners.length)],
cards:cards[Math.floor(Math.random()*cards.length)],
confidence:"89%"
})
})

app.listen(process.env.PORT
