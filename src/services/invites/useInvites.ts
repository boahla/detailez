import { useMutation } from "@tanstack/react-query";
import { queryOptions } from "./quries";

export function useAcceptInvite({ onSuccess }: { onSuccess?: any }) {
  return useMutation(queryOptions.acceptInvite({ onSuccess }));
}

export function useInviteTesters({
  onSuccess,
  onError,
}: {
  onSuccess?: any;
  onError?: any;
}) {
  return useMutation(queryOptions.inviteTesters({ onSuccess, onError }));
}
