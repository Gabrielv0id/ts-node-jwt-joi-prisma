import { NextFunction, Request, Response } from "express";
import { createLogin } from "../joi/schemas";

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = createLogin.validate(req.body)
  
  if (error) {
    const { type } = error.details[0];
    if (type.includes('required') || type.includes('empty')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(401).json({ message: error.message });
  }

  next();
}