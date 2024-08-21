// mongodb+srv://nicktrusere:Butf3V0onNlRSd3o@cluster0.kjwld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db.js')
const UserModel = require('./models/User.js')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
// express app
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

connectDB()


// routes
app.get('/', (req, res) => {
   res.json({mssg: 'Welcome to the App'})
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Logged in Successfully")
            } else {
                res.json("Incorrect password!!")
            }
        } else {
            res.json("User not Registered !!!")
        }
    })
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, email, password: hash})
    })
    .then(users => res.json({status: 'OK'}))
    .catch(err => res.json(err))
})

// listen for requests
app.listen(4000, () => {
    console.log('listening on PORT 3000!!!!!')
})