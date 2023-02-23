import { app } from "./app";

app.listen({
    port: 3333,
}, (error, address) => {

    if (error) {
        process.exit(1)
    } else {
        console.log(`Server is running on ${address}`)
    }
})