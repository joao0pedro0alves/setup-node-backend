import { FastifyInstance } from "fastify";
import { createTaskController } from "../../use-cases/create-task";
import { toogleTaskCompletedController } from "../../use-cases/toogle-task-completed";

export async function taskRoutes(fastify: FastifyInstance) {
    fastify.post('/', (request, reply) => createTaskController.handle(request, reply))
    fastify.put('/:taskId', (request, reply) => toogleTaskCompletedController.handle(request, reply))
}