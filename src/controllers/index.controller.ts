import { Response, Request } from "express";

export function indexWelcome(req: Request, res: Response) {
  return res.json("Welcome to my API");
}
