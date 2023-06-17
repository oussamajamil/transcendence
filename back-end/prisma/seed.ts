import { PrismaClient } from '@prisma/client';

const Ranks = [
  {
    name: 'Bronze',
    requiredPoints: 0,
    emblem: 'https://i.imgur.com/0Q0VQwv.png',
    border: 'https://i.imgur.com/0Q0VQwv.png',
  },
  {
    name: 'Silver',
    requiredPoints: 100,
    emblem: 'https://i.imgur.com/0Q0VQwv.png',
    border: 'https://i.imgur.com/0Q0VQwv.png',
  },
  {
    name: 'Gold',
    requiredPoints: 200,
    emblem: 'https://i.imgur.com/0Q0VQwv.png',
    border: 'https://i.imgur.com/0Q0VQwv.png',
  },
];

const users = [
  {
    login: 'yossef',
  },
  {
    login: 'hamid',
  },
  {
    login: 'l3bal',
  },
  {
    login: 'izouf',
  },
  {
    login: 'sawab',
  },
  {
    login: 'aynam',
  },
];

const prisma = new PrismaClient();

const createRanks = async () => {
  Ranks.forEach(async (rank) => {
    await prisma.rank.create({
      data: rank,
    });
  });
};

const createUsers = async () => {
  users.forEach(async (user) => {
    await prisma.user.create({
      data: {
        ...user,
        rank: {
          connect: {
            name: 'Bronze',
          },
        },
      },
    });
  });
};

const friends = async () => {
  const users = await prisma.user.findMany();
  console.log('data', users);

  // users.forEach(async (user, index) => {
  //   console.log('user', user);
  // });
  for (let i = 0; i < users.length - 1; i++) {
    await prisma.relation.create({
      data: {
        user: {
          connect: {
            id: users[i].id,
          },
        },
        relationWith: {
          connect: {
            id: users[i + 1].id,
          },
        },
        type: 'FRIEND',
      },
    });
  }
};

const ranksdata = async () => await prisma.rank.findMany();
const usersdata = async () => await prisma.user.findMany();
async function main() {
  console.log('Start seeding...');
  // await createRanks();
  // createUsers()
  //   .then((ranks) => {
  //     console.log(ranks);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   })
  //   .finally(async () => {
  //     await prisma.$disconnect();
  //   });
  friends();
}

main();
