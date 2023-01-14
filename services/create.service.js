const { ServiceBroker } = require("moleculer");


// Create a ServiceBroker
const broker = new ServiceBroker({
	namespace: "dev",
	nodeID: "posts-create",
	transporter: "TCP",
	
});

// Define a service
broker.loadService("./services/posts/create.service");
broker.start();