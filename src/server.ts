import { app } from './app';
import { SERVER_PORT, SERVER_HOST } from './config/app';

app.listen(
    {
        port: SERVER_PORT,
        host: SERVER_HOST
    },
    (error, address) => {
        if (error) {
            process.exit(1);
        } else {
            console.log(`Server is running on ${address}`);
        }
    }
);
