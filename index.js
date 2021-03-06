require('dotenv').config()
const express = require('express')
const app = express();
const db = require('./models')
const bodyParser = require('body-parser')

db.sequelize.sync({ });

// Routes
const tweetRoute = require('./routes/tweet.routes')

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false}))

// defining route
app.use('/tweet', tweetRoute)

app.use('/', (req, res) => {
    res.send({
        message: "Our Apps is running smoothly"
    })
})


const PORT = process.env.APP_PORT || 4000
app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`)
})