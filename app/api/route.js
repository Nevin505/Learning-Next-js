export async function GET(req) {
  console.log("req", req);
  return new Response("Hello!");
}
