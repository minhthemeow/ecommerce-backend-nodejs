const app = require("./src/app");
const PORT = process.env.PORT || 3056;
console.log(process.env.PORT)

const server = app.listen(PORT, () => {
    console.log(`Web Service eCommerce start with ${PORT}`);
});

// process.on('SIGINT', () => {
//     server.close( () => console.log("Exit Server Express"))
// })