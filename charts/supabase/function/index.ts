export default async (req: Request) => {
  return new Response("Hello from Supabase Function!", {
    headers: { "Content-Type": "text/plain" },
  });
};
