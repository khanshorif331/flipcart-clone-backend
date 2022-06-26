const express = require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

// environment variable or you can say const
env.config()

// DB_USER
// 9ZORMBLVb8XxvYu3

// mongodb connection string
// mongodb+srv://DB_USER:<password>@cluster0.d8ev6.mongodb.net/?retryWrites=true&w=majority

mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.d8ev6.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('Database Connected')
	})

// middlewares
app.use(bodyParser())
app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`)
})
