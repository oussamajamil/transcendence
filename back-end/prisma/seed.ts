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

const channels = [
  {
    name: 'test1',
    type: 'DM',
    members: {
      connect: [
        {
          user: {
            connect: {
              name: 'sawab',
            },
          },
        },
        {
          user: {
            connect: {
              name: 'izouf',
            },
          },
        },
      ],
    },
  },
  {
    name: 'test2',
    type: 'DM',
  },
  {
    name: 'test3',
    type: 'DM',
  },
  {
    name: 'test4',
    type: 'DM',
  },
];

const prisma = new PrismaClient();

const createRanks = async () => {
  Ranks.forEach(async (rank) => {
    await prisma.rank.upsert({
      where: {
        name: rank.name,
      },
      update: {},
      create: rank,
    });
  });
};

const createUsers = async () => {
  users.forEach(async (user) => {
    await prisma.user.upsert({
      where: {
        login: user.login,
      },
      update: {},
      create: {
        ...user,
        // rank: {
        //   connect: {
        //     name: 'Bronze',
        //   },
        // },
      },
    });
  });
};

const friends = async () => {
  const users = await prisma.user.findMany();
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

const createMatchHistory = async () => {
  const users = await prisma.user.findMany();
  for (let i = 0; i < users.length - 1; i++) {
    await prisma.matchHistory.create({
      data: {
        winnerScore: 10,
        loserScore: 5,
        winner: {
          connect: {
            id: users[i].id,
          },
        },
        loser: {
          connect: {
            id: users[i + 1].id,
          },
        },
      },
    });
  }
};

const createChannel = async () => {
  await prisma.channel.create({
    data: {
      name: 'test',
      type: 'DM',
      messages: {
        create: {
          content: 'hello i am here',
          user: {
            connect: {
              login: 'sawab',
            },
          },
        },
      },
    },
  });
  await prisma.channel.create({
    data: {
      name: 'channel2',
      type: 'DM',
      messages: {
        create: {
          content: 'hello from channel 2',
          user: {
            connect: {
              login: 'sawab',
            },
          },
        },
      },
    },
  });
};

const createMembersShip = async () => {
  const channels = await prisma.channel.findMany();
  await prisma.membership.create({
    data: {
      user: {
        connect: {
          login: 'sawab',
        },
      },
      channel: {
        connect: {
          id: channels[0].id,
        },
      },
      status: 'ACTIVE',
      type: 'MEMBER',
    },
  });
  await prisma.membership.create({
    data: {
      user: {
        connect: {
          login: 'izouf',
        },
      },
      channel: {
        connect: {
          id: channels[0].id,
        },
      },
      status: 'ACTIVE',
      type: 'MEMBER',
    },
  });
  await prisma.membership.create({
    data: {
      user: {
        connect: {
          login: 'sawab',
        },
      },
      channel: {
        connect: {
          id: channels[1].id,
        },
      },
      status: 'ACTIVE',
      type: 'MEMBER',
    },
  });
  await prisma.membership.create({
    data: {
      user: {
        connect: {
          login: 'izouf',
        },
      },
      channel: {
        connect: {
          id: channels[1].id,
        },
      },
      status: 'ACTIVE',
      type: 'MEMBER',
    },
  });
};



const messages = [
  {
    content: 'hello i am here',
    user: {
      connect: {
        login: 'sawab',
      },
    },
  },
  {
    content: 'hhhhhhhh',
    user: {
      connect: {
        login: 'izouf',
      },
    },
  },
  {
    content: 'hello i am here',
    user: {
      connect: {
        login: 'sawab',
      },
    },
  },
];

const createMessages = async () => {
  const channels = await prisma.channel.findMany();
  messages.forEach(async (message) => {
    await prisma.message.create({
      data: {
        ...message,
        channel: {
          connect: {
            id: channels[0].id,
          },
        },
      },
    });
  });
};

// const ranksdata = async () => await prisma.rank.findMany();
// const usersdata = async () => await prisma.user.findMany();
async function main() {
  //clear all tables
  await prisma.membership.deleteMany();
  await prisma.message.deleteMany();
  await prisma.channel.deleteMany();
  await prisma.relation.deleteMany();
  await prisma.matchHistory.deleteMany();
  await prisma.user.deleteMany();
  await prisma.rank.deleteMany();

  // create ranks
  await createRanks();
  //   //create users
  await createUsers();
  // //   //create friends
  await friends();
  //   //create match history
  await createMatchHistory();
  // //   //create channel
  await createChannel();
  // //create membership
  await createMembersShip();
  // //create messages
  await createMessages();
}

main();
