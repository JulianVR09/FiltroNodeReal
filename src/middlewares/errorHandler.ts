import { Request, Response } from "express";

const errorHanlder = (err: any, req: Request, res: Response): void => {
    console.error(err.stack);
    res.status(500).json({message:`Internal Server Error ${err.stack}`});
}

export default errorHanlder;
