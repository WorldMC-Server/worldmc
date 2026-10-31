import app from "./.open-next/worker.js";
const redirects = {"www.worldmc.net": "worldmc.net"};
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (redirects[url.hostname]) return Response.redirect("https://" + redirects[url.hostname] + url.pathname + url.search, 308);
    const response = await app.fetch(request, env, ctx);
    const result = new Response(response.body, response);
    result.headers.set("X-Hosting-Provider", "cloudflare");
    if (url.hostname.endsWith(".workers.dev") || url.hostname.startsWith("preview.")) result.headers.set("X-Robots-Tag", "noindex, nofollow");
    return result;
  }
};
