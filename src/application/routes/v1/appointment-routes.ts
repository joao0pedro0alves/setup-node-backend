import { FastifyInstance } from 'fastify';
import { createAppointmentController } from '../../use-cases/create-appointment';

export async function appointmentRoutes(fastify: FastifyInstance) {
    fastify.post('/', (request, reply) =>
        createAppointmentController.handle(request, reply)
    );
}
