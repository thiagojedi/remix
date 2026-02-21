import { router } from "frames-demo/app/router.tsx"

let port = Deno.env.has("PORT") ? parseInt(Deno.env.get("PORT")!, 10) : 44100

Deno.serve({
  port,
  onListen: () => {
    console.log(`Frames demo is running on http://localhost:${port}`)
  },
}, (req) => router.fetch(req))
