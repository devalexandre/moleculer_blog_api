const DbService = require("moleculer-db");
const SqlAdpter = require("@indevweb/moleculer-db-adapter-sequelize");
const fs = require("fs");



module.exports = (collection) => { 
	const schema = {
		mixins: [DbService],
	};

	schema.adapter = new SqlAdpter({
		dialect: "postgres",
		username: "openbook",
		password: "4cgMwHfiy8Q8YYvZDhibsw",
		host:"openbook-5562.7tt.cockroachlabs.cloud",
		port: 26257,
		database: "openbook-5562.defaultdb",
		dialectOptions: {
			ssl: {
				ca: fs.readFileSync("/home/alexandre/.postgresql/root.crt").toString(),
			},
		},
		logging: true,
	});

	schema.collection = collection;
	return schema;
};