import Fastify from 'fastify'
import UserRoutes from './routes/UserRoutes';

const app = Fastify();

app.register(UserRoutes);

export default app