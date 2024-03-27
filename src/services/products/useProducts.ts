import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { queryOptions } from "./quries";
import { productStatus } from "@/src/datas";

export function useGetProducts({ status }: { status: productStatus }) {
  return useQuery(queryOptions.products({ status }));
}

export function useGetProduct({ productId }: { productId: number }) {
  return useQuery(queryOptions.product({ productId }));
}

export function useDeleteProduct({
  productId,
  onSuccess,
}: {
  productId: number;
  onSuccess?: any;
}) {
  return useMutation(queryOptions.deleteProdcut({ productId, onSuccess }));
}

export function useCopyProduct({
  productId,
  onSuccess,
}: {
  productId: number;
  onSuccess?: any;
}) {
  return useMutation(queryOptions.copyProduct({ productId, onSuccess }));
}

export function useCopyProductStatus({
  productId,
  onSuccess,
}: {
  productId: number;
  onSuccess?: any;
}) {
  return useMutation(queryOptions.copyProductStatus({ productId, onSuccess }));
}

export function useMakeNewProduct({
  params,
  onSuccess,
}: {
  params: {
    name: string;
    contents: string;
  };
  onSuccess?: any;
}) {
  return useMutation(queryOptions.makeNewProduct({ params, onSuccess }));
}

export function useGetProductQAList({ productId }: { productId: number }) {
  return useQuery(queryOptions.productQAList({ productId }));
}

export function useGetProductQATarget({ id }: { id: number | undefined }) {
  return useQuery(queryOptions.productQATarget({ id }));
}

export function useSaveProduct({ onSuccess }: { onSuccess?: any }) {
  return useMutation(queryOptions.saveProduct({ onSuccess }));
}

export function useEndProduct({ onSuccess }: { onSuccess?: any }) {
  return useMutation(queryOptions.endProduct({ onSuccess }));
}

export function useUpdateTCItem({
  id,
  contents,
  onSuccess,
}: {
  id: number;
  contents: string;
  onSuccess?: any;
}) {
  return useMutation(queryOptions.updatetcItem({ id, contents, onSuccess }));
}

export function useAddTCItem(props: UseMutationOptions) {
  return useMutation(queryOptions.addtcItem(props));
}

export function useDeleteTCItem({ onSuccess }: { onSuccess?: any }) {
  return useMutation(queryOptions.deletetcItem({ onSuccess }));
}

export function useDeleteTC({ onSuccess }: { onSuccess?: any }) {
  return useMutation(queryOptions.deletetc({ onSuccess }));
}

export function useAnswerTC({ onSuccess }: { onSuccess?: any }) {
  return useMutation(queryOptions.answertcItem({ onSuccess }));
}
