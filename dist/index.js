"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: {
                id: 1
            },
            include: {
                todos: true
            }
        });
        console.log(user);
    });
}
createUser();
