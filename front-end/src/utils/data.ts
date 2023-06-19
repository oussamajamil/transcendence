import { matchHistoryType, userType, relationsType } from "./types";

const history1: matchHistoryType[] = [];
const history2: matchHistoryType[] = [];

const relations: relationsType[] = [];
const relationsWith: relationsType[] = [];

export const player1: userType = {
  id: "1",
  avatar: "test.png",
  login: "player1",
  rank: "silver",
  level: 15,
  relations: relations,
  relationsWith: relationsWith,
  winHistory: history1,
  loseHistory: history2,
};

export const player2: userType = {
  id: "2",
  avatar: "test.png",
  login: "player2",
  rank: "gold",
  level: 20,
  relations: relationsWith,
  relationsWith: relations,
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

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "BLOCKED",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "BLOCKED",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "BLOCKED",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player1,
  relationWith: player2,
});

relations.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player1,
  relationWith: player2,
});

relationsWith.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player2,
  relationWith: player1,
});

relationsWith.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "BLOCKED",
  user: player2,
  relationWith: player1,
});

relationsWith.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player2,
  relationWith: player1,
});

relationsWith.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player2,
  relationWith: player1,
});

relationsWith.push({
  id: (new Date().getTime() + Math.random() * 1000).toString(),
  type: "FRIEND",
  user: player2,
  relationWith: player1,
});
