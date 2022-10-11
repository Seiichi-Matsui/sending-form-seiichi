const express = require('express')
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fakeDb');
const contactRoutes = require('./routes/contact')
const bodyParser = require('body-parser')

mongoose.connect(config.DB_URI).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    } 
)

const app = express()
app.use(bodyParser.json())

app.use('/api/v1/contacts', contactRoutes)


if(process.env.NODE_ENV === 'production') {
    const appPath = path.join( __dirname, '..', 'dist', 'sending-form')
    app.use(express.static(appPath))
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'))
})
}

const PORT = process.env.PORT  || '3001'

app.listen(PORT, function() {
    console.log('起動完了');
})