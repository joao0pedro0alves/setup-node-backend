import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateTask } from './create-task';
import z from 'zod'

export class CreateTaskController {
    constructor(private createTaskUseCase: CreateTask) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
        const createTaskRequestBody = z.object({
            title: z.string().max(60)
        })

        const { title } = createTaskRequestBody.parse(request.body)

        await this.createTaskUseCase.execute({
            title,
            completed: false,
        })

        return reply.status(201).send();
    }
}