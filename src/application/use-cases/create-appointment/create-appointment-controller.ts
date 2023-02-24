import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateAppointment } from './create-appointment';
import z from 'zod';

export class CreateAppointmentController {
    constructor(private createAppointmentUseCase: CreateAppointment) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply
    ): Promise<FastifyReply> {
        const createAppointmentRequestBody = z.object({
            customer: z.string(),
            endsAt: z.coerce.date(),
            startsAt: z.coerce.date(),
        });

        const { customer, endsAt, startsAt } =
            createAppointmentRequestBody.parse(request.body);

        await this.createAppointmentUseCase.execute({
            customer,
            endsAt,
            startsAt,
        });

        return reply.status(201).send();
    }
}
