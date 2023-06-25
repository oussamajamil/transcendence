import axios from "axios";

const getConversation = async (id: string) => {
  const respons = await axios.get("/channel", {
    params: {
      where: JSON.stringify({
        members: {
          some: {
            user: {
              id,
            },
          },
        },
      }),
      include: JSON.stringify({
        members: {
          where: {
            NOT: {
              user: {
                id,
              },
            },
          },
        },
        messages: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      }),
    },
  });
  return respons.data.results;
};

export { getConversation };
