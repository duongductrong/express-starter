import { useApp } from "@/bootstrap/app";
import { useEnv } from "@/bootstrap/env";
import { useErrorHandler } from "@/bootstrap/error";
import { useSystemLogs } from "@/bootstrap/logging";
import express from "express";
import { useRouter } from "./bootstrap/router";

const app = express();

useEnv();
useApp(app);
useSystemLogs(app);
useRouter(app);

useErrorHandler(app);
