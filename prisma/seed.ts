import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

async function createDummyUsers() {
   await client.user.create({
        data: {
            username: "Bharti2",
            age: 21,
            password: "12345",
            city: "Bihar",
            todos: {
                create: {
                    description: "Go to gym",
                    title: "Gym",
                    done: false
                }
            }
        }
    })
}

createDummyUsers()

// 

//  add this to package.json
// "prisma": {
//     "seed": "ts-node prisma/seed.ts"
//   },
// npm i -D ts-node typescript @types/node
// npx prisma db seed
