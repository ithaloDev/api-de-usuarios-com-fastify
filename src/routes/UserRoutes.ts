import {FastifyInstance} from 'fastify'
import UserController from '../controllers/UserController'
import { validation } from '../middlewares/validation'

export default async function (router: FastifyInstance) {
    router.get('/users/', UserController.getAllUsers)
    router.get('/users/search/:id', UserController.getUserById)
    router.post('/users/create-user', {preHandler: [validation]}, UserController.createUser)
    router.put('/users/update-user/:id', {preHandler: validation}, UserController.updateUser)
    router.delete('/users/delete-user/:id', UserController.deleteUser)
}