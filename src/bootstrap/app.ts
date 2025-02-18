import { Express } from "express";

import bodyParser from "body-parser";
import helmet from "helmet";
import chalk from "chalk";
import methodOverride from "method-override";

/**
 * Sets up the Express application with necessary middleware and configurations.
 *
 * @param {Express} app - The Express application instance.
 */
export const useApp = (app: Express) => {
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));

  app.use(helmet());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride())

  app.listen(process.env.APP_PORT, () => {
    console.log(
      chalk.green(
        `[Express] Server is running on port ${
          process.env.APP_PORT
        } ${chalk.gray(`http://localhost:${process.env.APP_PORT}`)}`
      )
    );
  });
};
