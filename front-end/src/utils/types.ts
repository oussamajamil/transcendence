export type Params = {
  page?: number;
  limit?: number;
  where?: any;
  include?: any;
};

export type matchHistoryType = {
  id: string;
  winner: userType;
  loser: userType;
  winnerScore: number;
  loserScore: number;
  createdAt: Date;
};

export type relationsType = {
  id?: string;
  type?: "FRIEND" | "BLOCKED" | "PENDING";
  user?: userType;
  userId: string;
  relationWith?: userType;
  relationWithId: string;
};

export type userType = {
  id: string;
  login: string;
  avatar: string;
  level: number;

  relations: relationsType[];
  relationsWith: relationsType[];

  winHistory: matchHistoryType[];
  loseHistory: matchHistoryType[];
  rank: "bronze" | "silver" | "gold";
};
