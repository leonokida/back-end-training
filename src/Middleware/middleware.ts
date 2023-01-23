import * as express from "express";
import { DBHandler } from "../DBHandler";

export interface Request extends express.Request {
    db: DBHandler;
}

export type Middleware = (req: Request, res: express.Response, next: express.NextFunction) => void;

export function DBHandlerMw(): Middleware {
    const db: DBHandler = new DBHandler();

    return (req: Request, res: express.Response, next: express.NextFunction) => {
        req.db = db;
        next();
    };
}
