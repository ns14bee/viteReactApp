import axios from "axios";
import {
  updateProfileStart,
  updateProfileSuccess,
  updateProfileError,
} from "./profileSlice";

export const updateProfile = async (user, dispatch) => {
  console.log("here");
  console.log(user);
  dispatch(updateProfileStart());
  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/user/getUser",
      user
    );
    dispatch(updateProfileSuccess(res.data.data));
  } catch (err) {
    dispatch(updateProfileError());
  }
};
