const express = require('express')
const routes = require('./routes/api.js')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.use('/api', routes)
app.get('/', (req, res)=>{
    console.log(`METHOD ${req.method}\nURL ${req.url}`);
    res.send("home")
})

const PORT = 2340

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})

