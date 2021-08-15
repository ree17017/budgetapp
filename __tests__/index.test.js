const request = require("supertest");
const app = require("express");

describe("", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/api/posts").send({
      userId: 1,
      title: "test is cool",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
