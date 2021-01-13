// Setup Server + spin up the server + debug callback
const app = require("./index");

const port = 3143;
const server = app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});