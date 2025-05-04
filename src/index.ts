// npm init -y
//  npx i typescript
//   npx tsc --inti 
// change 'rootdir' to 'scr'
// change 'outdir' to 'dist'
// add script  "dev": "tsc -b && node ./dist/index.js"
// npm i prisma
// npx prisma init
// npx prisma migrate dev
//  this generated folder is output of prisma can be removed  remove it 
//  migrate the data base when u make changes in schema
//  npx prisma generate to generate client


import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
    await client.user.create({
        data:{
            username: "priyanshu",
            password: "123",
            age:21,
            city:"Patna"
        }
    })
}
createUser();