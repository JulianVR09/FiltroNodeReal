import { Request, Response } from "express";

const errorHandler = (err: any, _: Request, res: Response): void => {
    console.error(err.stack);
    res.status(500).json({message:`Internal Server Error ${err.stack}`});
}

export default errorHandler;
