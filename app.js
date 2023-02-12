import express from 'express';
import {getMarinas, getSingleMarina, getRandomMarina, creatMarina} from './database.js'

const app =express();


app.use(express.json())



app.get ('/mari', async (req,res)=>{
    const marinas = await getMarinas()
    res.send(marinas)
})


app.get('/mari/:id', async(req,res)=>{
    const id = req.params.id
    const marina = await getSingleMarina(id)
    res.send(marina)
})

app.get ('/mari/random', async (req,res)=>{
    const random= await getRandomMarina() 
    res.send(random)
})




app.post('/mari', async(req,res)=> {
    const {song, lyrics}=req.body
    const create =await cre(song, lyrics)
    res.status(201).send(create)
})






app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


  app.listen(8080, ()=>{
    console.log('server is running on port 8080')
})