const request = require('supertest');
const indexApp = require("./index");
const users = [
    {id:1,name:"Russel",age:33},
    {id:2,name:"John",age:32}
];
describe("GET /api/users",()=>{
    it("should return array of users",async()=>{
        const res = await request(indexApp).get("/api/users");
        expect(res.statusCode).toBe(200);
       // expect(res.body.message).toBe(users);
        expect(res.body).toEqual(users);
    });
});