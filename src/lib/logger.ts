import winston from "winston";
import "winston-daily-rotate-file";

const transport = new winston.transports.DailyRotateFile({
  filename: "logs/%DATE%.log",
  datePattern: "YYYY-MM-DD",
  level: "info",
  maxSize: "20m",
  maxFiles: "14d",
  format: winston.format.combine(
    winston.format.padLevels(),
    winston.format.json(),
    winston.format.timestamp(),
    winston.format.metadata(),
    winston.format.ms()
  ),
});

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.padLevels(),
    winston.format.json(),
    winston.format.timestamp(),
    winston.format.metadata(),
    winston.format.ms()
  ),
  transports: [transport],
});
