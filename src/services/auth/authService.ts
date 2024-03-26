import axios from "axios";

class AuthService {
  async postSignIn({
    email,
    password,
  }: {
    email: string | undefined;
    password: string | undefined;
  }) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
        { email, password }
      );
      return res.data;
    } catch (err) {
      console.log("error", { err });
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
