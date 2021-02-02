const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


morgan.token('person', ((req) => {
    if (req.method == "POST") {
        return JSON.stringify(req.body)
    } else {
        return ""
    }
    
}))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))
let persons = [
                {id: 1, name: "Arto Hellas", number: "040-123456"},
                {id: 2, name: "Ada Lovelace", number: "020-123123"},
                ]


app.get('/', (req,res) => {
    res.send(`<p> Phonebook has info for ${persons.length} people</p>
            <p>${new Date(Date.now())}</p>`
    )
})

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})



app.post('/api/persons', (req,res) => {

    const body = req.body

    const generateId = () => Math.floor(Math.random() * Math.floor(1000000))

    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }

    if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const exists = persons.find(p => p.name == body.name)

    if (exists) {
        return res.status(404).json({
            error: 'name already exists'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    res.send(person).end()
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})

const port = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

