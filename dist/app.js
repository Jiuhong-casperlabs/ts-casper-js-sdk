"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const casper_js_sdk_1 = require("casper-js-sdk");
const app = (0, express_1.default)();
const client = new casper_js_sdk_1.CasperServiceByJsonRPC("http://3.208.91.63:7777/rpc");
app.get("/", (req, res) => {
    const _DEPLOY_HASH = "6c4048f8ebd40a160e9df47e73680eda8ae8430309a9566655bb357a5967276b";
    client.getDeployInfo(_DEPLOY_HASH).then((result) => {
        console.log(result);
        res.status(200).json(result);
    });
});
app.listen(5000, () => console.log("Server is running."));
