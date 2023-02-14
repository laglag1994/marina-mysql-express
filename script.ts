import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const newMarina = await prisma.mari.create({
        data:{
            song: 'starring role',
            lyrics:'you hard to hug tough to talk to'
            
        }
    })
console.log(newMarina)
}



main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })