import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import router from './router.js'
import favicon from 'serve-favicon'
import {mongoURI} from './private.js'

const PORT = process.env.PORT ?? 3000
const app = express()

const __dirname = path.resolve()

// view engine
app.set('view engine', 'ejs')

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

// favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(router)

async function startApp() {
	await mongoose.connect(mongoURI)
	app.listen(PORT, async () => {
		console.log('Server is working')
	})
}

startApp()
