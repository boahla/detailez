import inviteService from "./inviteService";

const queryKeys = {
  invite: ["invite"] as const,
};

const queryOptions = {
  acceptInvite: ({ onSuccess }: { onSuccess: any }) => ({
    mutationFn: ({ id }: { id: number | string }) =>
      inviteService.AcceptInvite({ id }),
    onSuccess: onSuccess,
  }),
};

export { queryOptions };
