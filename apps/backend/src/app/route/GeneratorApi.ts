import Controller from "../controller/GeneratorController";
import * as express from "express";

const api = express.Router();


let url = '/api/gen';

api.post(`${url}/step-one`, Controller.stepOne);

// api.put(`${url}/:hash`, Controller.updateHash);

// api.post(url, Controller.saveHash);

// api.delete(`${url}/:hash`, Controller.deleteHash);

export default api;
