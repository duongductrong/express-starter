import { logger } from "@/lib/logger";
import chalk from "chalk";
import { Express } from "express";
import morgan from "morgan";

/**
 * Sets up system logging for the Express application.
 *
 * @param {Express} app - The Express application instance.
 */
export const useSystemLogs = (app: Express) => {
  app.use((req, res, next) => {
    if (Number(req.statusCode) < 400) {
      logger.info(
        `${req.method} ${req.url} ${res.statusCode} ${req.ip} ${req.headers["user-agent"]}`
      );
    }

    if (Number(req.statusCode) >= 400) {
      logger.error(
        `${req.method} ${req.url} ${res.statusCode} ${req.ip} ${req.headers["user-agent"]}`
      );
    }

    return next();
  });

  app.use(
    morgan(function (tokens, req, res) {
      return `${chalk.blue(
        tokens.method(req, res)
      )} ${chalk.green(tokens.url(req, res))} ${chalk.red(tokens["response-time"](req, res) + " ms")} ${chalk.yellow("Status: " + tokens.status(req, res))} ${chalk.magenta("Content-Length: " + tokens.res(req, res, "content-length") + " bytes")} ${chalk.cyan("User-Agent: " + tokens["user-agent"](req, res))}`;
    })
  );
};
