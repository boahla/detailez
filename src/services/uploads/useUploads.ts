import { useMutation } from "@tanstack/react-query";
import { queryOptions } from "./quries";

export function useGetPresignedUrl({ id }: { id: number }) {
  return useMutation(queryOptions.presignedURL({ id }));
}
