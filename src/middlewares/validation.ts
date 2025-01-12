import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";

export const userSchema = z.object({
  user: z
    .string()
    .min(6, "O usuário deve ter pelo menos 6 caracteres.")
    .nonempty("O usuário é obrigatório."),
  email: z
    .string()
    .email("O email deve ser válido.")
    .nonempty("O email é obrigatório."),
});

export const validation = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    userSchema.parse(request.body);
    return; // loop infinito
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({
        errors: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message
        })),
      });
    }
  }
};
