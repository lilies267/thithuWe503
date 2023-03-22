import express from "express";
import { Delete, Patch, Post, getAll } from "../controller/product";

const router = express.Router();

router.get("/product", getAll);
router.post("/product", Post);
router.delete("/product/:id", Delete);
router.patch("/product/:id", Patch);

export default router;
