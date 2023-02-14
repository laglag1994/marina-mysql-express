import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()






 export const getMarinas = async()=> await prisma.song.findMany()
 
 

 export const getSingleMarina = async(id)=> await prisma.song.findUnique(id)
 


 export const creatMarina = async (song, lyrics)=>await prisma.song.create({
    data:{
        song: 'karma',
        lyrics:'omg i think its karma'
    }
 })
