interface User {
  id: string;
  name: string;
  email: string;
}

interface UserCreate extends User {
  bio?: string;
}

export default {
  Query: {
    users: async (root: any, _: any, { prisma }: any) => {
      try {
        return await prisma.user.findMany();
      } catch (err) {
        throw err;
      } finally {
        prisma.$disconnect();
      }
    },
    createUser: async (
      root: any,
      { name, email, bio, ...options }: UserCreate,
      { prisma }: any
    ) => {
      try {
        return await prisma.user.create({
          data: {
            name,
            email,
            profile: {
              create: { bio },
            },
          },
        });
      } catch (err) {
        throw err;
      } finally {
        prisma.$disconnect();
      }
    },
  },
};
