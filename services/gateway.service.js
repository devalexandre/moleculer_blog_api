const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

const broker = new ServiceBroker({
	namespace: "dev",
	nodeID: "api-gateway",
	transporter: "TCP",
});

// Load API Gateway
broker.createService({
	mixins: [ApiService],
	hotReload: true,
	settings: {
		routes: [
			{
				path: "/api",
				whitelist: [
					"**"
				],

				aliases: {
					"POST posts": "posts.create",
				},
				autoAliases: true,
			},
		],
	},
            
});

// Start server
broker.start();