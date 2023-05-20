export type matchHistoryType = {
  id: string;
  winner: userType;
  loser: userType;
  winnerScore: number;
  loserScore: number;
  createdAt: Date;
};

export type userType = {
  id: string;
  login: string;
  avatar: string;
  level?: number;

  winHistory: matchHistoryType[];
  loseHistory: matchHistoryType[];
  rank: "bronze" | "silver" | "gold";
};
