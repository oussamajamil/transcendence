export interface findAll {
  take?: number;
  skip?: number;
  where: {
    [key: string]: any;
  };
  select?: {
    [key: string]: any;
  };
  orderBy?: {
    [key: string]: any;
  };
}