import prisma from "../prisma/client";

class UserService {
    public async createUser(user: string, email: string) {
        const existingUser = await prisma.user.findMany({
            where: { user },
        });

        if(existingUser.length > 0) {
            return null
        }

        return await prisma.user.create({
            data: { user, email }
        })
    }

    public async getAllUsers() {
        return await prisma.user.findMany()
    }

    public async getUserById(id: string) {

        return await prisma.user.findUnique({
            where: { id }
        });
    }

    public async deleteUser(id: string) {
        const existingUserById = await prisma.user.findUnique({
            where: { id },
        });

        if(!existingUserById) {
            return null
        }
        return await prisma.user.delete({
            where: { id }
        })
    }

    public async updateUser(id: string, user: string, email: string) {
        const existingUserById = await prisma.user.findUnique({
            where: { id },
        });

        if(!existingUserById) {
            return null
        }
        return await prisma.user.update({
            where: { id },
            data: { user, email }
        })
    }
}

export default new UserService();