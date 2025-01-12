import { FastifyRequest, FastifyReply } from 'fastify';
import UserService from '../services/UserService';
import { Users } from '../model/userModel';

class UserController {
    public async createUser(request: FastifyRequest, reply: FastifyReply) {
        try {

            const { user, email } = request.body as Users;

            const users = await UserService.createUser(user, email);

            if (!users) {
                return reply.status(400).send({ msg: "Esse usuario ja existe" });
            }

            return reply.status(201).send(users);

        } catch (err) {
            console.error(err)
            return reply.status(500).send({ msg: "Error no servidor tente novamente" });
        }
    }

    public async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
        try {
            const users = await UserService.getAllUsers()

            return reply.status(200).send(users);
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ msg: "Error no servidor tente novamente" });
        }
    }

    public async getUserById(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as Users;

            if(id.length !== 24) {
                return reply.status(400).send({msg:"ID inválido"})
            }

            const users = await UserService.getUserById(id);

            if (!users) {
                return reply.status(404).send({ msg: "Usuario nao encontrado" });
            }

            return reply.status(200).send(users);

        } catch (err) {
            console.error(err)
            return reply.status(500).send({ msg: "Error no servidor tente novamente" });
        }
    }

    public async updateUser(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as Users
            const { user, email } = request.body as Users

            if(id.length !== 24) {
                return reply.status(400).send({msg:"ID inválido"})
            }

            const users = await UserService.updateUser(id, user, email)

            if (!users) {
                return reply.status(404).send({ msg: "Usuario nao encontrado" });
            }

            return reply.status(200).send(users);
        } catch (err) {
            console.error(err)
            return reply.status(500).send({ msg: "Error no servidor tente novamente" });
        }

    }

    public async deleteUser(request:FastifyRequest, reply:FastifyReply) {
        try {

            const {id} = request.params as Users;

            if(id.length !== 24) {
                return reply.status(400).send({msg:"ID inválido"})
            }

            const users = await UserService.deleteUser(id);

            if(!users) {
                return reply.status(404).send({ msg: "Usuario nao encontrado" });
            }

            return reply.status(200).send({msg:"Usuario deletado com sucesso"});

        } catch(err) {
            console.error(err)
            return reply.status(500).send({ msg: "Error no servidor tente novamente" });
        }
    }
}

export default new UserController;