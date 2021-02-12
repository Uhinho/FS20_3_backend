require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const Person = require('./models/person')

morgan.token('person', ((req) => {
    if (req.method == "POST") {
        return JSON.stringify(req.body)
    } else {
        return ""
    }
}))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))





app.get('/', (req,res, next) => {
    res.send(`<p> Phonebook has info for ${Person.findAll.length} people</p>
            <p>${new Date(Date.now())}</p>`
    ).catch(err => next(err))
})

app.get('/api/persons', (req,res, next) => {
    Person.find({})
        .then(persons => {
            res.json(persons)
        })
        .catch(err => next(err))
})

app.get('/api/persons/:id', (req,res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if(person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})



app.post('/api/persons', (req,res, next) => {

    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person
        .save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            res.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req,res, next) => {
    const id = req.params.id
    Person.findByIdAndDelete(id, (e) => {
        if(e) console.log(e)
        console.log("Successfully deleted")
    })
    .then(result => {
        res.status(204).end()
    })
    .catch(err => next(err))
})

app.put('/api/persons/:id', (req,res, next) => {
    const id = req.params.id
    
    Person.findByIdAndUpdate(id, {number: req.body.number})
    .then(p  => {
        res.json(p)
    })
    .catch(err => next(err))
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'})
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({error: error.message})
    }

    next(error)
}

app.use(errorHandler)




const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

