const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
app.use(express.static('./ACME Template'))


app.get("/acme", (req, res) =>{
    res.send("./ACME Template/index.html")
})

app.get("/about", (req, res) =>{
    res.send("Hey this is aboutpage in our express server")
})
app.get("/contact", (req, res) =>{
    res.send("Hey this is contactpage in our express server")
})
app.get("/services", (req, res) =>{
    res.send("Hey this is servicespage in our express server")
})
app.get("*", (req, res) =>{
    res.send(`<h1>404 page no found</h1><p>Seems thst psge you are trying to get isn't available</p><a href="/">back to home</a>`)
})
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})
