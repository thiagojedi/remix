import { router } from './app/router.tsx'

export default {
  fetch: (req: Request) => router.fetch(req),
  onListen: (address: { port: number }) => {
    console.log(`Server-Sent Events demo is running on http://localhost:${address.port}`)
  },
}
