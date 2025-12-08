import { Router } from "express";
import { follow, login, signup } from "../controllers/userController";
import { auth } from "../../middleware/auth";
import { getPosts, posts } from "../controllers/postsController";
import { upload } from "../../utils/upload";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/posts", auth, upload.single("image"), posts);
router.get("/posts", getPosts);
router.post("/:id/follow", follow);

export default router;
