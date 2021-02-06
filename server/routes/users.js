import express from "express";
import {
  setUserFav,
  removeUserFav,
  fetchUserFavs,
} from "../controllers/users.js";

const router = express.Router();

// db requests
router.get("/favourites/:userId", fetchUserFavs);
router.post("/favourites/:userId/:characterId", setUserFav);
router.delete("/favourites/:userId/:characterId", removeUserFav);

export default router;
