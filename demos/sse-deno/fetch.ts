import { router } from "sse-demo/app/router.tsx";

export default {
  fetch: (req) => router.fetch(req),
  onListen: (address) => {
    if (address.transport === "tcp") {
      console.log(
        `Server-Sent Events demo is running on http://${address.hostname}:${address.port}`,
      );
    }
  },
} satisfies Deno.ServeDefaultExport;
