const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        unique: true
    },
    number: {
        type: String,
        required: [true, 'User phone number required'],
        validate : {
            validator: function(v) {
                return /(\D*\d){8}/.test(v)
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
})

phoneSchema.plugin(uniqueValidator);
const Phone = mongoose.model('Phone', phoneSchema)

phoneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Phone',phoneSchema)