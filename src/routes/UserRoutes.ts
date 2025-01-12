import { FastifyInstance } from 'fastify';
import UserController from '../controllers/UserController';
import { validation } from '../middlewares/validation';
import { idParamSchema, userBodySchema, userResponseSchema } from '../schema/UserSchemas';

export default async function (router: FastifyInstance) {
    router.get('/users/', {
        schema: {
            description: 'Listar todos os usuários',
            tags: ['Users'],
            response: {
                200: {
                    description: 'Lista de usuários',
                    type: 'array',
                    items: userResponseSchema,
                },
                500: {
                    description: "Error no servidor",
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                }
            },
        },
        handler: UserController.getAllUsers,
    });

    router.get('/users/search/:id', {
        schema: {
            description: 'Buscar um usuário por ID',
            tags: ['Users'],
            params: idParamSchema,
            response: {
                200: userResponseSchema,
                404: {
                    description: 'Usuário não encontrado',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                400: {
                    description: 'ID invalido',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                500: {
                    description: "Error no servidor",
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                }
            },
        },
        handler: UserController.getUserById,
    });

    router.post('/users/create-user', {
        schema: {
            description: 'Criar um novo usuário',
            tags: ['Users'],
            body: userBodySchema,
            response: {
                201: userResponseSchema,
                400: {
                    description: 'Erro de validação',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                500: {
                    description: "Error no servidor",
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                }
            },
        },
        preHandler: validation,
        handler: UserController.createUser,
    });

    router.put('/users/update-user/:id', {
        preHandler: validation,
        schema: {
            description: 'Atualizar um usuário por ID',
            tags: ['Users'],
            params: idParamSchema,
            body: userBodySchema,
            response: {
                200: userResponseSchema,
                404: {
                    description: 'Usuário não encontrado',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                400: {
                    description: 'ID invalido',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                500: {
                    description: "Error no servidor",
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                }
            },
        },
        handler: UserController.updateUser,
    });

    router.delete('/users/delete-user/:id', {
        schema: {
            description: 'Deletar um usuário por ID',
            tags: ['Users'],
            params: idParamSchema,
            response: {
                200: {
                    description: 'Usuário deletado com sucesso',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                404: {
                    description: 'Usuário não encontrado',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                400: {
                    description: 'ID invalido',
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                },
                500: {
                    description: "Error no servidor",
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                    },
                }
            },
        },
        handler: UserController.deleteUser,
    });
}
