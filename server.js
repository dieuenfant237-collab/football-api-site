const axios = require("axios")

async function getPredictions(){
const res = await axios.get("https://game-forecast-api.p.rapidapi.com/events",{
headers:{
"X-RapidAPI-Key":"8814939dd5msh3d233e8ee7aac4bp195e8cjsn592854cda7e3",
"X-RapidAPI-Host":"game-forecast-api.p.rapidapi.com"
},
params:{
status_code:"NOT_STARTED"
}
})
return res.data
}

module.exports = { getPredictions
