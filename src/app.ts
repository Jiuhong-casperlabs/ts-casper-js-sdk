import express, { Application, Request, Response, NextFunction} from "express";

import { CasperServiceByJsonRPC } from "casper-js-sdk";

const app:Application = express();

const client = new CasperServiceByJsonRPC("http://3.208.91.63:7777/rpc");

app.get("/", (req: Request, res: Response) => {
    
    const _DEPLOY_HASH =
        "6c4048f8ebd40a160e9df47e73680eda8ae8430309a9566655bb357a5967276b";
    
    client.getDeployInfo(_DEPLOY_HASH).then((result: any) => {
    console.log(result);
    res.status(200).json(result);
  });
})

app.listen(5000,()=>console.log("Server is running."))