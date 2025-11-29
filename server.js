const app = require("./src/app");
const PORT = process.env.DEV_APP_PORT || 3055;
console.log(process.env.DEV_APP_PORT)

const server = app.listen(PORT, () => {
    console.log(`Web Service eCommerce start with ${PORT}`);
});

// process.on('SIGINT', () => {
//     server.close( () => console.log("Exit Server Express"))
// })