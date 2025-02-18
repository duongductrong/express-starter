import { useApp } from "@/bootstrap/app";
import { useEnv } from "@/bootstrap/env";
import { useErrorHandler } from "@/bootstrap/error";
import { useSystemLogs } from "@/bootstrap/logging";
import express from "express";

const app = express();

useEnv();
useApp(app);
useSystemLogs(app);

app.get("/", (req, res) => {
  res.json({ message: "ok" }).status(400);
});

app.get("/error", (req, res) => {
  throw new Error("asdasd");
});

useErrorHandler(app);
