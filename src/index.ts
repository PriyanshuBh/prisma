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

// import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();

// async function createUser() {
//     const user = await client.user.findFirst({
//         where: {
//             id: 1
//         },
//         include: {
//             todos: true
//         }
//     })

//     console.log(user)
// }
// createUser();

import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const app = express();
const client = new PrismaClient();

app.post("/user", async (req, res) => {
  const { username, password, age, city } = req.body;

  const hashedPassword = await bcrypt.hash(password, 16);

  try {
    const user = await client.user.create({
      data: {
        username,
        password: hashedPassword,
        age,
        city,
      },
    });

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "User creation failed" });
  }
});
app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;

  const user = await client.user.findFirst({
    where: {
      id: parseInt(id),
    },
    select: {
      todos: true,
      username: true,
      password: true,
    },
  });
  res.json({
    user,
  });
});

app.listen(3000);

async function getUser() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      todos: true,
    },
  });

  console.log(user);
}

getUser();
