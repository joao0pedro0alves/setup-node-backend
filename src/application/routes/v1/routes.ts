import { FastifyInstance } from "fastify";
import { taskRoutes } from "./task-routes";

export async function routes(fastify: FastifyInstance)  {
    fastify.register(taskRoutes, {prefix: '/tasks'})
}