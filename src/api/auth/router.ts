import { createRouter } from "@/lib/router";
import signIn from "./controllers/sign-in";

const router = createRouter();

router.get("/sign-in", signIn);

export default router;
