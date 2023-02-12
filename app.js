import express from 'express';
// npm install dotenv (to use .env file)
import dotenv from "dotenv"
dotenv.config()
import { getMarinas, getSingleMarina, getRandomMarina, creatMarina } from './database.js'

const app = express();


app.use(express.json())


// change unused variables names to _
app.get('/mari', async (_, res) => {
	const marinas = await getMarinas()
	res.send(marinas)
})


app.get('/mari/:id', async (req, res) => {
	const id = req.params.id
	const marina = await getSingleMarina(id)
	res.send(marina)
})

// removed localhost as it is not needed here.
app.get('/mari/random', async (_, res) => {
	const random = await getRandomMarina()
	res.send(random)
})


app.post('/mari', async (req, res) => {
	const { song, lyrics } = req.body
	const create = await creatMarina(song, lyrics)
	res.status(201).send(create)
})


app.use((err, _, res, __) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

// the port is set in the .env file
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log('server is running on port ' + PORT)
})
