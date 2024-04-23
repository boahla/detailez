import { useQuery } from "@tanstack/react-query";
import { queryOptions } from "./quries";
import { reportStatus } from "@/src/datas/products";

export function useGetProductReports({ status }: { status: reportStatus }) {
  return useQuery(queryOptions.products({ status }));
}

export function useGetProductReport({ productId }: { productId: number }) {
  return useQuery(queryOptions.product({ productId }));
}

export function useGetReportUser({ productId }: { productId: number }) {
  return useQuery(queryOptions.user({ productId }));
}

export function useGetReportStatus({
  productId,
  pageSize,
  pageNum,
}: {
  productId: number;
  pageSize: number;
  pageNum: number;
}) {
  return useQuery(queryOptions.status({ productId, pageSize, pageNum }));
}
