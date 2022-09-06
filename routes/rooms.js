import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/:cabinid", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:cabinid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom); //evrbody can get to the cabins
//GET ALL
router.get("/", getRooms);

export default router