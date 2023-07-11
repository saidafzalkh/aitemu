import { hashPassword } from "@/lib/bcrypt";
import { prisma } from "@/lib/prisma";

async function main() {
  const bob = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      password: await hashPassword("password123"),
      name: "Bob",
      image: "https://avatars.githubusercontent.com/u/6078720?s=200&v=4",
    },
  });

  console.log({ bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
