import { createController } from "@/lib/router";

export default createController((req, res, next) => {
  res.json({ message: "ok", path: "sign-in" });
});
