import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const maria = await prisma.mari.create({
        data: {
            song: 'starring role',
            lyrics:'you hard to hug tough to talk to'
        }
    })
    console.log(maria)
}



main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })