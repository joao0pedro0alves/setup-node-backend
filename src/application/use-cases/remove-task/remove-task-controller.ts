import { FastifyReply, FastifyRequest } from 'fastify';
import { RemoveTask } from './remove-task';
import z from 'zod'

export class RemoveTaskController {
    constructor(private removeTaskUseCase: RemoveTask) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {

        const removeTaskRequestParams = z.object({
            taskId: z.string().uuid(),
        });

        const { taskId } = removeTaskRequestParams.parse(request.params);

        await this.removeTaskUseCase.execute({
            taskId
        });

        return reply.status(200).send();
    }
}