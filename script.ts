import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    await prisma.mari.deleteMany

}



main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect
    })