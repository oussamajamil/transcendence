import axios from "axios";
import { Params, relationsType } from "../../utils/types";

export const createRelation = async (data: relationsType) => {
  const response = await axios.post(`/relations`, data);
  return response.data;
};

export const updateRelation = async (
  id: string | undefined,
  data: { type: string }
): Promise<relationsType> => {
  const response = await axios.patch(`/relations/${id}`, data);
  return response.data;
};

export const deleteRelation = async (id: string): Promise<relationsType> => {
  const response = await axios.delete(`/relations/${id}`);
  return response.data;
};
