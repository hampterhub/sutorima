import { createConfig } from "express-zod-api";

const config = createConfig({
  http: { listen: 8090 }, // port, UNIX socket or Net::ListenOptions
  cors: false, // decide whether to enable CORS
  startupLogo: false
});

export default config;