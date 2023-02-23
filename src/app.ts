import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify()

app.register(cors, {
    origin: true
})

export { app }