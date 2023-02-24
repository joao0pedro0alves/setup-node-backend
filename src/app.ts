import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './application/routes/v1/routes';

const app = Fastify();

app.register(cors, {
    origin: true,
});

app.register(routes, { prefix: '/api/v1' });

export { app };
