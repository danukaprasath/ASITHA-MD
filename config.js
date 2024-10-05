const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=3I10QBQS#Y-cgww1TeYVXz1zYkXomsN0GOO5fjo_TuMqSrhYoIHs",
MONGODB: process.env.MONGODB |94772484733| "",//enter mongo db url
};
