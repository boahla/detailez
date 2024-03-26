import axios from "@/src/utils/axios";
import { IgetPresignedUrlResult } from "./types";

class UploadService {
  async getPresignedUrl({
    id,
  }: {
    id: number;
  }): Promise<IgetPresignedUrlResult | undefined> {
    try {
      const res = await axios.post(`/page`, { id });
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UploadService();
