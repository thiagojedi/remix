import { router } from "./app/router.ts";

export default {
  fetch: (req: Request) => router.fetch(req),
  onListen: (address: { port: number}) => {
      console.log(
        `unpkg demo is running on http://localhost:${address.port}`,
      );
  },
};
