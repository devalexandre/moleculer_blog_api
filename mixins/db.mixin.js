
const fs = require("fs");


module.exports = {
        dialect: "postgres",
        username: "alexandre",
        password: "It8KFcYm8HrmQa6Yn29M7w",
        host: "blog-api-8104.7tt.cockroachlabs.cloud",
        port: 26257,
        database: "blog-api-8104.defaultdb",
        dialectOptions:{
            ssl:{
                ca: fs.readFileSync("/home/alexandre/.postgresql/root.crt").toString(),
            }
        },
        logging: true,

}
