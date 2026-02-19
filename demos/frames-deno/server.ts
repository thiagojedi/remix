import { router } from "frames-demo/app/router.tsx"

export default {
  fetch: (request) => router.fetch(request),
  onListen: (address) => {
    if (address.transport === "tcp") {
      console.log(`Frames demo is running on http://${address.hostname}:${address.port}`)
    }
  },
} satisfies Deno.ServeDefaultExport
