import { Server } from 'hyper-express';

const app = new Server();

app.get('/', (req, res) => {
    res.send('Hello, HyperExpress with TypeScript!');
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
