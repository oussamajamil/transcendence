import axios from "axios";

export const getUser = async (username: string) => {
  const response = await axios.get(`/user/${username}`);
  return response.data;
};

export type Params = {
  page?: number;
  limit?: number;
  where?: any;
  include?: any;
};

export const getUsers = async (params: Params = {}) => {
  const { page = 1, limit = 20, where = {}, include = {} } = params;
  const response = await axios.get("/users", {
    params: {
      take: limit,
      skip: (page - 1) * limit,
      where: JSON.stringify(where),
      include: JSON.stringify(include),
    },
  });
  return response.data;
};
