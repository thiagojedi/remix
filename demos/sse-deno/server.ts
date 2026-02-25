import { router } from "sse-demo/app/router.tsx";

let port = Deno.env.has("PORT") ? parseInt(Deno.env.get("PORT")!, 10) : 44100;

Deno.serve({
  port,
  onListen: () => {
    console.log(
      `Server-Sent Events demo is running on http://localhost:${port}`,
    );
  },
}, (req) => router.fetch(req));
