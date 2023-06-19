import axios from "axios";

const getConversation = async (login: string) => {
  const respons = await axios.get("/channel", {
    params: {
      where: JSON.stringify({
        type: "DM",
        members: {
          some: {
            user: {
              login: login,
            },
          },
        },
      }),
      include: JSON.stringify({
        messages: true,
      }),
    },
  });
  return respons.data;
};

export { getConversation };
