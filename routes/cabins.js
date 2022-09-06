import express from "express"
import { createCabin, deleteCabin, getCabin, getCabins, updateCabin } from "../controllers/cabin.js";
import Cabin from "../models/Cabin.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCabin);
//UPDATE
router.put("/:id", verifyAdmin, updateCabin);
//DELETE
router.delete("/:id", verifyAdmin, deleteCabin);
//GET
router.get("/:id", getCabin); //evrbody can get to the cabins
//GET ALL
router.get("/", getCabins);

export default router