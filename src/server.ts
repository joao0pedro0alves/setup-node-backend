import { app } from "./app";
import dotenv from 'dotenv';

dotenv.config()

app.listen({
    port: 3333,
}, (error, address) => {

    if (error) {
        process.exit(1)
    } else {
        console.log(`Server is running on ${address}`)
    }
})