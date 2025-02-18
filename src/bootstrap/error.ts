import { logger } from "@/lib/logger";
import { Express, NextFunction, Request, Response } from "express";

/**
 * Middleware to handle errors in the Express application.
 *
 * @param {Express} app - The Express application instance.
 */
export const useErrorHandler = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);

    res.status(500).json({ message: "Internal Server Error" });
  });
};
