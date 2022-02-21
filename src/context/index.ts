import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const context = async (req: any) => {
  return {
    ...req,
    prisma,
  };
};

export { context };
export default context;
