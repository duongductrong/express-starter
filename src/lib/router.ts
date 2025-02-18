import { NextFunction, Request, Response, Router } from "express";

export function createRouter() {
  const router = Router();

  return router;
}

export function createController(
  handler: (req: Request, res: Response, next: NextFunction) => void
) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
