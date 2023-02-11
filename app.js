import express from 'express';
import {getMarinas, getSingleMarina, getRandomMarina, creatMarina} from './database.js'

const app =express()


app.get ('/mari', async (req,res)=>{
    const marinas = await getMarinas()
    res.send(marinas)
})


app.get('/mari/:id', async(req,res)=>{
    const id = req.prams.id
    const marina = await getSingleMarina()
    res.send(marina)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


  app.listen(8080, ()=>{
    console.log('server is running on port 8080')
})