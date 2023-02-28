import { FastifyInstance } from "fastify";
import { createTaskController } from "../../use-cases/create-task";
import { removeTaskController } from "../../use-cases/remove-task";
import { toogleTaskCompletedController } from "../../use-cases/toogle-task-completed";

export async function taskRoutes(fastify: FastifyInstance) {
    fastify.post('/', (request, reply) => createTaskController.handle(request, reply))
    fastify.put('/:taskId', (request, reply) => toogleTaskCompletedController.handle(request, reply))
    fastify.delete('/:taskId', (request, reply) => removeTaskController.handle(request, reply))
}