const mongoose = require('mongoose')
require('dotenv').config()


const url = process.env.MONGODB_URI

console.log('connectiong to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => { 
      console.log('connected to MongoDB')  
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const personSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        minlength: 8,
        required: true,
    }
})

personSchema.set('toJSON', {
    transform: (doc, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

module.exports = mongoose.model('Person', personSchema)