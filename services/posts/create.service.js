const { STRING , INTEGER, TEXT} = require("sequelize");
const dbConfig = require("../../mixins/dm.mixins");
const DbService = require("moleculer-db");
const SqlAdpter = require("@indevweb/moleculer-db-adapter-sequelize");


module.exports = {
	name: "posts",
	hotReload: true,
	mixins: [DbService],
    adapter: new SqlAdpter(dbConfig),
	model: {
		name: "posts",
		define: {
			id: { type: INTEGER, autoIncrement: true, primaryKey: true },
			title: { type: STRING},
			content: { type: TEXT },
		},
	},

	settings: {
		fields: ["id", "title", "content"],
		entityValidator: {
			title: "string|min:3",
			content: "string|min:40",
		},
	
	},

	actions: {
		create(ctx) {
			//this.logger.info("Creating a post");
			return this.adapter.insert(ctx.params);
		},

	}
    
};
