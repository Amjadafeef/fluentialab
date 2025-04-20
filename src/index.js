// Ensure this code is inside the file pointed to by 'main' in wrangler.toml
// e.g., src/index.js

export default {
  async fetch(request, env, ctx) {
    // This function is required to handle incoming requests
    // You can add your Worker logic here
    return new Response('Hello World from My Worker!'); // Return a response
  },
};