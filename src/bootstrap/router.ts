import { Express } from "express";

import apiRouter from "@/api";

export const useRouter = (app: Express) => {
  app.use("/api", apiRouter);
};
