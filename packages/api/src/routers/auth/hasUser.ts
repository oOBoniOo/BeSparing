import { FastifyRequest } from 'fastify';

export const hasUser = async (req: FastifyRequest): Promise<null | { sub: string }> => {
  try {
    const user = await req.jwtVerify<{ sub: string }>();
    // console.log(user);
    return user;
  } catch (error) {
    return null;
  }
};
