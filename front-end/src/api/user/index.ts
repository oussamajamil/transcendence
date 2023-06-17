import axios from "axios";
import { Params, userType } from "../../utils/types";

export const getUser = async (
  id: string,
  params: Params = {}
): Promise<userType> => {
  const response = await axios.get(`/users/${id}`, {
    params,
  });
  return response.data;
};

export const getUsers = async (
  params: Params = {}
): Promise<{ totalResult: number; results: userType[] }> => {
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
