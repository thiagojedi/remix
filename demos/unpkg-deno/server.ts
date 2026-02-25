import { router } from "unpkg-demo/app/router.ts";

let port = Deno.env.has("PORT") ? parseInt(Deno.env.get("PORT")!, 10) : 44100;

Deno.serve({
  port,
  onListen: () => {
    console.log(
      `unpkg demo is running on http://localhost:${port}`,
    );
  },
}, (req) => router.fetch(req));
