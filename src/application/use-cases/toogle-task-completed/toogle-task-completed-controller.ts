import { FastifyReply, FastifyRequest } from 'fastify';
import { ToogleTaskCompleted } from './toogle-task-completed';
import z from 'zod';

export class ToogleTaskCompletedController {
    constructor(private toogleTaskCompletedUseCase: ToogleTaskCompleted) {}

    async handle( request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
        const toogleTaskCompletedRequestParams = z.object({
            taskId: z.string().uuid(),
        });

        const { taskId } = toogleTaskCompletedRequestParams.parse(request.params);

        await this.toogleTaskCompletedUseCase.execute({
            taskId,
        });

        return reply.status(200).send();
    }
}
