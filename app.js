const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
    console.log(getDate())
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


function getDate() {
    var currentdate = new Date();
    var datetime = "Last Sync: "  + currentdate.getTime() + " "
        + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    return datetime
}
