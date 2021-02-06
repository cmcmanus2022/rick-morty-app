import express from "express";
import {
  fetchCharacters,
  fetchDetails,
} from "../controllers/characters.js";

const router = express.Router();

//rick and morty api requests
router.get("/:page", fetchCharacters);
router.get("/fetch/:id", fetchDetails);

export default router;
