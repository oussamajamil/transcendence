import axios from "axios";

const getConversation = async (id: string) => {
  const respons = await axios.get("/channel", {
    params: {
      where: JSON.stringify({
        type: "DM",
        members: {
          some: {
            user: {
              id: id,
            },
          },
        },
      }),
      include: JSON.stringify({
        messages: true,
        members: {
          include: {
            user: true,
          },
        },
      }),
    },
  });
  return respons.data.results;
};

export { getConversation };
