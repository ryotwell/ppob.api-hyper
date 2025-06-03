import { Server } from 'hyper-express';
import followrequestRoutes from './routes/followrequestRoutes';

const app = new Server();

app.get('/', (req, res) => {
    res.send('Hello, HyperExpress with TypeScript!');
});

app.use('/api/followrequest', followrequestRoutes);

export default app;