import axios from "axios";
import {RM_API_URL} from "../utils/constants.js";

export const fetchCharacters = async (req, res) => {
  const page = req.params.page;
  try {
    const {data} = await axios.get(`${RM_API_URL}/character?page=${page}`);

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const fetchDetails = async (req, res) => {
  try {
    const {id} = req.params;
    const {data} = await axios.get(`${RM_API_URL}/character/${id}`);

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};
