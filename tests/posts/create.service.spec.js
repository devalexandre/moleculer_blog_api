const { ServiceBroker } = require("moleculer");
const TestService = require("../../services/posts/create.service");


//create mock moleculer-db 
jest.mock("moleculer-db", () => {
	const mDbService = {
		init: jest.fn(),
		connect: jest.fn(),
		disconnect: jest.fn(),
	};
	return jest.fn(() => mDbService);
});


describe("Test 'posts' service", () => {
		
	describe("Test 'posts.create' action", () => {
	
		const broker = new ServiceBroker({ logger: false,logLevel: "error" });
		const service = broker.createService(TestService);

		//use reflection to set the adapter
		service.adapter = {
			insert: jest.fn((params) => Promise.resolve(params)),
		};
		// optionally set the logger
		//	service.logger = {
		//		debug: jest.fn((params) => console.log(params)),
		//		info: jest.fn((params) => console.log(params)),
		//	};
	
		beforeAll(() => broker.start());
		afterAll(() => broker.stop());


		it("should return with the created post", () => {
			
			const post = { title: "Test post", content: "Test content" };
			return broker.call("posts.create", post).then(res => {
				expect(res).toEqual(post);
			});

			
		});
	});
});