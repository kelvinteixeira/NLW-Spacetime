import fastify from "fastify";
import { prisma } from "./lib/prisma";
import cors from '@fastify/cors'
import { memoriesRoutes } from "./routes/memories";

const app = fastify();
app.register(memoriesRoutes)
app.register(cors, {
  origin: true
})

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 Server is running on http://localhost:3333");
  });
