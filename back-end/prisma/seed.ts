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
    login: 'ojamil',
    rankId: '8339cba2-d530-4d2e-9930-ec2625d7f403',
  },
  {
    login: 'hdrabi',
    rankId: '6036ca49-033a-41cb-9a07-904b82d88ad6',
  },
  {
    login: 'momayaz',
    rankId: '6e4f34c3-6ba4-4e7a-9629-530eb79bf2d8',
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
      data: user,
    });
  });
};

const ranksdata = async () => await prisma.rank.findMany();
const usersdata = async () => await prisma.user.findMany();
async function main() {
  await createRanks();
  // console.log('Start seeding...');
  // usersdata()
  //   .then((ranks) => {
  //     console.log(ranks);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   })
  //   .finally(async () => {
  //     await prisma.$disconnect();
  //   });
}

main();
