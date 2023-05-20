import { matchHistoryType, userType } from "./types";

const history1: matchHistoryType[] = [];
const history2: matchHistoryType[] = [];

export const player1: userType = {
  id: "1",
  avatar: "test.png",
  login: "player1",
  rank: "silver",
  level: 15,
  winHistory: history1,
  loseHistory: history2,
};

export const player2: userType = {
  id: "2",
  avatar: "test.png",
  login: "player2",
  rank: "gold",
  level: 20,
  winHistory: history2,
  loseHistory: history1,
};

history1.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player1,
  loser: player2,
  winnerScore: 11,
  loserScore: 7,
  createdAt: new Date(),
});

history1.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player1,
  loser: player2,
  winnerScore: 11,
  loserScore: 7,
  createdAt: new Date(),
});

history1.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player1,
  loser: player2,
  winnerScore: 5,
  loserScore: 0,
  createdAt: new Date(),
});

history1.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player1,
  loser: player2,
  winnerScore: 21,
  loserScore: 19,
  createdAt: new Date(),
});

history1.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player1,
  loser: player2,
  winnerScore: 15,
  loserScore: 13,
  createdAt: new Date(),
});

history1.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player1,
  loser: player2,
  winnerScore: 11,
  loserScore: 9,
  createdAt: new Date(),
});

history2.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player2,
  loser: player1,
  winnerScore: 11,
  loserScore: 7,
  createdAt: new Date(),
});

history2.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player2,
  loser: player1,
  winnerScore: 11,
  loserScore: 7,
  createdAt: new Date(),
});

history2.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player2,
  loser: player1,
  winnerScore: 5,
  loserScore: 0,
  createdAt: new Date(),
});

history2.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player2,
  loser: player1,
  winnerScore: 21,
  loserScore: 19,
  createdAt: new Date(),
});

history2.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player2,
  loser: player1,
  winnerScore: 15,
  loserScore: 13,
  createdAt: new Date(),
});

history2.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),

  winner: player2,
  loser: player1,
  winnerScore: 11,
  loserScore: 9,
  createdAt: new Date(),
});
