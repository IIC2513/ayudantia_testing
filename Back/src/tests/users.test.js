const request = require("supertest");
const db = require("../models");
const app = require("../app");



beforeAll(async() => {
    await db.sequelize.sync({ force: true})
});

afterAll(async() => {
    await db.sequelize.close() 
});

describe("Users API",()  => {

    test("should create a new user", async () => {
        const res = await request(app.callback()).post("/users").send({
            username : "primer usuario"
        });

    expect(res.statusCode).toEqual(201);
    expect(res.body.username).toEqual("primer usuario")
    });
});

