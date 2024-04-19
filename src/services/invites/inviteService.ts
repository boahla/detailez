import axios from "@/src/utils/axios";

class InviteService {
  // response invite
  async AcceptInvite({ id }: { id: number | string }): Promise<void> {
    try {
      await axios.patch(`/report/accept/${id}`, {
        status: "accept",
      });
    } catch (err) {
      console.log("error", { err });
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new InviteService();
