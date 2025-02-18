import { config } from "dotenv";

/**
 * Loads environment variables from the .env file.
 */
export const useEnv = () => {
  config();
};
