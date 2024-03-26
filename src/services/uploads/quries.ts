import uploadService from "./uploadService";

const queryKeys = {
  all: ["uploads"] as const,
  presignedURL: (id: number) =>
    [...queryKeys.all, "presignedURL", { id }] as const,
};

const queryOptions = {
  presignedURL: ({ id }: { id: number }) => ({
    // queryKey: queryKeys.presignedURL(id),
    mutationFn: () => uploadService.getPresignedUrl({ id }),
  }),
};

export { queryOptions };
