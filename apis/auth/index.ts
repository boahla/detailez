import axios from "axios";
import { IPostSignin } from "./type";

const postSignin: IPostSignin = async ({ email, password }) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
      {
        email,
        password,
      }
    );
    return res.data;
  } catch (err) {
    console.log("error", { err });
  }
};

export { postSignin };
