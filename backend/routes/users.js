import express from "express";
import {update,like,getUser,deleteUser} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router=express.Router();

router.put("/:id",verifyToken, update);

router.delete("/:id",verifyToken,deleteUser );

router.get("/find/:id", getUser);


router.put("/like/:videoId",verifyToken, like);


export default router;