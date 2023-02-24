import { FastifyInstance } from "fastify";
import { createTaskController } from "../../use-cases/create-task";

export async function taskRoutes(fastify: FastifyInstance) {
    fastify.post('/', (request, reply) => createTaskController.handle(request, reply))
}