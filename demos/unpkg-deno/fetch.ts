import { router } from "unpkg-demo/app/router.ts";

export default {
  fetch: (req) => router.fetch(req),
  onListen: (address) => {
    if (address.transport === "tcp") {
      console.log(
        `unpkg demo is running on http://${address.hostname}:${address.port}`,
      );
    }
  },
} satisfies Deno.ServeDefaultExport;
