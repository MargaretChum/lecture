var express = require("express")

var app = express()
const SERVER_PORT =8088

//http://localhost:8088
app.get("/",(req,res) => {
    res.send("Welcome to WEB-700 Express Server")
})

//http://localhost:8088/hello
app.get("/hello",(req,res) => {
    res.send("<h1>Hello, How are you?</h1>")
})

//http://localhost:8088/student
app.get("/student",(req,res)=>{
    const stud = {
        sid: 1,
        fnm: "Margaret",
        lnm: "Chum",
        result:"PASS3"
    }
    res.send(stud)
    //res.json(stud)
    //res.send(JSON.stringify(stud))
})

//query string, try to get something after ?
//http://localhost:8088/emp?eid=100&fnm=Margaret&lnm=Chum <-- if add more in query, it will work
app.get("/emp", (req, res) => {
    res.send(`eid:${req.query.eid}-fnm:${req.query.fnm}-lnm:${req.query.lnm}`)
})

//Path Parameter
//http://localhost:8088/stu/100/Margaret/Chum <-- if add more in URL, it will NOT work
app.get("/stu/:studentid/:fnm/:lnm", (req, res) => {
    res.send(req.params)
})




app.listen(SERVER_PORT,() => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})

//Refresh the code automatically//
//in server.js terminal:
//npm i nodemon --save-dev
//in package.json
//update in package.json as well
//in server.js terminal:
//npm run devd dasdasdasd