const { prisma } = require("./generated/prisma-client-js");

async function main() {
  await prisma.createUser({
    name: "Wagner Ricardo",
    email: "wagnerricardonet@gmail.com",
    password: "123"
  });

  const users = await prisma.users();

  console.log("users ", users);
}

main().catch(e => console.error(e));
