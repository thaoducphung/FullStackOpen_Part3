const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(express.static('build'))
app.use(cors())
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
  }))
app.use(express.json())



// app.use(morgan('tiny'))
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// const morgan = (tokens, req, res) => {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms'
//     ].join(' ')
//   }

// app.use(morgan)


let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },
]

app.get('/info', (req,res)=>{
    const numberPeople = persons.length
    res.send(`<p>Phonebook has info for ${numberPeople} people</p>
            <p>${new Date()}</p>`)
})

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res)=> {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person){
        res.json(person)
    } else {
        res.status(404).end()
    }
    
})

app.delete('/api/persons/:id', (req,res)=>{
    const id = Number(req.params.id)
    person = persons.filter(note=> note.id !== id)
    res.status(204).end()
})

const generateId = () => {
    const id = Math.floor(Math.random() * 10000000000);
    console.log(id)
    return id
}

app.post('/api/persons', (req,res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'The name or number is missing'
        })
    } else {
        const found = persons.find(person => person.name.toLowerCase() === (body.name).toLowerCase())
        if (found) {
            return res.status(400).json({
                error: 'name must be unique'
            })
        }
        const person = {
            name: body.name,
            number: body.number,
            id: generateId()
        }
        persons = persons.concat(person)
        res.json(person)
    }
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on part ${PORT}`)
})