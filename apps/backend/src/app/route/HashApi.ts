import Controller from "../controller/HashController";
import * as express from "express";

const api = express.Router();


let url = '/api/hash';

console.log()

api.get(`${url}/:hash`, Controller.getHash);

api.put(`${url}/:hash`, Controller.updateHash);

api.post(url, Controller.saveHash);

api.delete(`${url}/:hash`, Controller.deleteHash);

export default api;
