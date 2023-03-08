require('dotenv').config();
module.exports = {
    HOST: process.env.dbHost,
    USER: process.env.dbUser,
    PASSWORD: process.env.dbPass,
    DATABASE: process.env.database,
    multipleStatements : true
}