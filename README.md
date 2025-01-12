# API de Usuários com Fastify e TypeScript

Este projeto cria uma API simples para gerenciamento de usuários utilizando o framework Fastify com TypeScript. A API permite a criação, leitura, atualização e exclusão de usuários. Utilizando o Prisma ORM para manipulação do banco de dados.

## Instalação

Clone o repositório:  
```bash
git clone https://github.com/ithaloDev/api-de-usuarios-com-fastify.git  

cd api-de-usuarios-com-fastify  

npm install

```

## Pré-requisitos

Antes de rodar o projeto, é necessário configurar o banco de dados e as variáveis de ambiente.

### Passo 1
**Inicializar o Prisma no projeto:**

```bash
npx prisma init
```

### Passo 2

**Configuração do banco de dados**

Edite o arquivo `.env` gerado pelo Prisma com as configurações do seu banco de dados..

### Passo 3

Configure o seu `schema.prisma` gerado pelo Prisma.

### Passo 4

Após o procedimento, use o comando:

```bash
npx prisma db push
```
Este comando cria o banco de dados conforme definido no seu modelo.

### Passo 5

**Roda o projeto**

Para rodar o projeto, use o comando:

```bash
npm run dev
```

## Endpoints

### Método GET: `/users/`

Retorna uma lista de todos os usuários registrados.  

**Exemplo**

```json
[
  {
    "id": "1234567890abcdef12345678",
    "user": "john_doe",
    "email": "john.doe@example.com"
  },
  {
    "id": "abcdef1234567890abcdef12",
    "user": "jane_doe",
    "email": "jane.doe@example.com"
  }
]

```

### Método GET `/users/search/123`

Retorna os dados de um usuário específico, identificado pelo seu id.

```json
{
  "id": "1234567890abcdef12345678",
  "user": "john_doe",
  "email": "john.doe@example.com"
}
```

### Método POST: `/users/create-user`

Cria um novo usuário com as informações fornecidas (nome de usuário e email).

**Exemplo**

```json
{
  "user": "new_user",
  "email": "new.user@example.com"
}
```

### Método PUT: `/users/update-user/1234`

Atualiza as informações de um usuário existente, identificando-o pelo id. Permite a atualização do nome de usuário e email.

**Exemplo**

```json
{
  "user": "updated_user",
  "email": "updated.email@example.com"
}
```

Exemplo de resposta:

```json
{
  "id": "1234567890abcdef12345678",
  "user": "updated_user",
  "email": "updated.email@example.com"
}
````

### Método DELETE `/users/delete-user/1234` 

Deleta um usuário da base de dados, identificando-o pelo seu id.

Exemplo de resultado

```json
{
  "msg": "Usuário deletado com sucesso"
}
```