import { reportStatus } from "@/src/datas/products";
import reportService from "./reportService";

const queryKeys = {
  all: ["report"] as const,
  products: (status: reportStatus) =>
    [...queryKeys.all, "products", { status }] as const,
  product: (productId: number) =>
    [...queryKeys.all, "product", { productId }] as const,
  user: (productId: number) =>
    [...queryKeys.all, "user", { productId }] as const,
  status: (productId: number, pageSize: number, pageNum: number) =>
    [...queryKeys.all, "status", { productId, pageSize, pageNum }] as const,
};

const queryOptions = {
  products: ({ status }: { status: reportStatus }) => ({
    queryKey: queryKeys.products(status),
    queryFn: () => reportService.getProductReports({ status }),
  }),
  product: ({ productId }: { productId: number }) => ({
    queryKey: queryKeys.product(productId),
    queryFn: () => reportService.getProductReport({ productId }),
  }),
  user: ({ productId }: { productId: number }) => ({
    queryKey: queryKeys.user(productId),
    queryFn: () => reportService.getReportUser({ productId }),
  }),
  status: ({
    productId,
    pageSize,
    pageNum,
  }: {
    productId: number;
    pageSize: number;
    pageNum: number;
  }) => ({
    queryKey: queryKeys.status(productId, pageSize, pageNum),
    queryFn: () =>
      reportService.getReportStatus({ productId, pageSize, pageNum }),
  }),
};

export { queryOptions };
