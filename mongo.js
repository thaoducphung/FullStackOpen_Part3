const mongoose = require('mongoose')


if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const databaseName = 'phonebook'
const url = `mongodb://admin:${password}@cluster0-shard-00-00.24akn.mongodb.net:27017,cluster0-shard-00-01.24akn.mongodb.net:27017,cluster0-shard-00-02.24akn.mongodb.net:27017/${databaseName}?ssl=true&replicaSet=atlas-9o0nyh-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phoneSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Phone = mongoose.model('Phone', phoneSchema)


if (process.argv.length == 5) {
    const name = process.argv[3]
    const number = process.argv[4]
    const phone = new Phone({
        name: name,
        number: number
    })
    
    phone.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}


if (process.argv.length == 3) {
    Phone.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(phone => {
            console.log(`${phone.name} ${phone.number}`)
        })
        mongoose.connection.close()
    })
    
}
// node mongo.js yourpassword "Arto Vihavainen" 045-1232456
// node mongo.js yourpassword "Anna" 045-1232456
// node mongo.js yourpassword "Ada Lovelace" 040-1231236
