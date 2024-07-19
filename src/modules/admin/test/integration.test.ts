import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../../config/express";
import "mocha";
import { StatusCodes } from "http-status-codes";
import adminService from "../service";

chai.use(chaiHttp);

const prefix = "/api/v1/admin";

describe("ADMIN INTEGRATION TESTS", () => {
    afterEach(function () {
        sinon.restore();
    });

    describe("GET /", () => {
        it("should return a success response", async () => {
            const res = await chai.request(app).get(`${prefix}/`);
            expect(res.status).to.equal(StatusCodes.OK);
        });
        
        it("should return a failure response", async () => {
            sinon.stub(adminService, "index").rejects(new Error("Internal Server Error"));
            const res = await chai.request(app).get(`${prefix}/`);
            expect(res.status).to.equal(StatusCodes.INTERNAL_SERVER_ERROR);
        });
    });
});