export const GET = (request: Request) => {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
};
