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
  inviteTesters: ({
    onSuccess,
    onError,
  }: {
    onSuccess: any;
    onError: any;
  }) => ({
    mutationFn: ({ id, email }: { id: number | string; email: string[] }) =>
      inviteService.InviteTesters({ id, email }),
    onSuccess,
    onError,
  }),
};

export { queryOptions };
