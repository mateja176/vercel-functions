import { name } from './name';

export const GET = (request: Request) => {
  return new Response(`Hello ${name}, from ${process.env.VERCEL_REGION}`);
};
