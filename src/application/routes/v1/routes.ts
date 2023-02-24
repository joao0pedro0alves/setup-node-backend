import { FastifyInstance } from 'fastify';
import { appointmentRoutes } from './appointment-routes';

export async function routes(fastify: FastifyInstance) {
    fastify.register(appointmentRoutes, { prefix: '/appointments' });
}
