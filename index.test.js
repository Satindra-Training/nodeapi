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

//Testing with Post Request.

 

describe("POST /api/users/signup", () => {

  it("should create a new user successfully", async () => {

    const res = await request(indexApp)
      .post("/api/users/signup")
      .send({
        name: "Diana",
        email: "diana@test123.com"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("success");
  });

});

//for sending no parameters 
it("should fail when missing data", async () => {
  const res = await request(indexApp)
    .post("/api/users/signup")
    .send({}); // no name/email

  expect(res.statusCode).toBe(403); // based on your code
});