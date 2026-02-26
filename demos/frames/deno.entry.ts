import { router } from "./app/router.tsx"

export default {
  fetch: (request: Request) => router.fetch(request),
  onListen: (address: { port: number }) => {
    console.log(
      `Frames demo is running on http://localhost:${address.port}`,
    )
  },
}
