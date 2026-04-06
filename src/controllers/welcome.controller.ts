import { Request, Response } from "express";
import { IWelcome } from "../interfaces/welcome.interface";

export const getWelcomeMessage = (req: Request, res: Response) => {
  const data: IWelcome = {
    message: "hello world!!",
    status: 200,
    timestamp: new Date()
  };
  res.send(data.message);
};