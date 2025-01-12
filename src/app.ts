import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import UserRoutes from './routes/UserRoutes';

const app = Fastify();

// Configuração do Swagger
app.register(swagger, {
    swagger: {
        info: {
            title: 'API de Usuários',
            description: 'Documentação da API para gerenciamento de usuários',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
});

app.register(swaggerUi, {
    routePrefix: '/docs',
    staticCSP: true,
    transformStaticCSP: (header) => header,
});

app.register(UserRoutes);

export default app;
