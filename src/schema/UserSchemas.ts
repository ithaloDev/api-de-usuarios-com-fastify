export const idParamSchema = {
    type: 'object',
    properties: {
        id: { type: 'string', description: 'ID do usuário' },
    },
    required: ['id'],
};

export const userBodySchema = {
    type: 'object',
    properties: {
        user: { type: 'string', description: 'Nome do usuário' },
        email: { type: 'string', format: 'email', description: 'Email do usuário' },
    },
    required: ['user', 'email'],
};

export const userResponseSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        user: { type: 'string' },
        email: { type: 'string' },
    },
};
