import UserModel from "../db/userModel.js";

export const fetchUserFavs = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await UserModel.findById(userId);
    const userFavs = user.fav_chars;
    res.status(200).json(userFavs);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const setUserFav = async (req, res) => {
  const {userId, characterId} = req.params;

  const idInt = parseInt(characterId);

  try {
    const user = await UserModel.findById(userId);
    user.fav_chars.push(idInt);
    await user.save();

    res.status(201).json(idInt);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const removeUserFav = async (req, res) => {
  const {userId, characterId} = req.params;

  const idInt = parseInt(characterId);

  try {
    const user = await UserModel.findById(userId);
    const index = user.fav_chars.indexOf(idInt);
    if (index > -1) {
      user.fav_chars.splice(index, 1);
    }
    await user.save();

    res.status(200).json({message: "Favourite removed successfully. "});
  } catch (error) {
    res.status(404).json({message: "Cannot find character with that id"});
  }
};
