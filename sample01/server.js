import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';
const server = serve({ port: 8000 });
for await (const request of server) {
  request.respond({
    body: 'Hello World'
  });
}
