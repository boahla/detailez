import { productStatus } from "@/src/datas";
import productService from "./productService";

const queryKeys = {
  all: ["products"] as const,
  products: (status: productStatus) =>
    [...queryKeys.all, "products", { status }] as const,
  product: (productId: number) =>
    [...queryKeys.all, "product", { productId }] as const,
  productQAList: (productId: number) =>
    [...queryKeys.all, "productQAList", { productId }] as const,
  productQAItem: (id: number | undefined) =>
    [...queryKeys.all, "productQAItem", { id }] as const,
};

const queryOptions = {
  products: ({ status }: { status: productStatus }) => ({
    queryKey: queryKeys.products(status),
    queryFn: () => productService.getProducts({ status }),
  }),
  product: ({ productId }: { productId: number }) => ({
    queryKey: queryKeys.product(productId),
    queryFn: () => productService.getProduct({ productId }),
  }),
  deleteProdcut: ({
    productId,
    onSuccess,
  }: {
    productId: number;
    onSuccess: any;
  }) => ({
    mutationFn: () => productService.deleteProduct({ productId }),
    onSuccess: onSuccess,
  }),
  copyProduct: ({
    productId,
    onSuccess,
  }: {
    productId: number;
    onSuccess: any;
  }) => ({
    mutationFn: () => productService.copyProdcut({ productId }),
    onSuccess: onSuccess,
  }),
  copyProductStatus: ({
    productId,
    onSuccess,
  }: {
    productId: number;
    onSuccess: any;
  }) => ({
    mutationFn: () => productService.copyProdcutStatus({ productId }),
    onSuccess: onSuccess,
  }),
  makeNewProduct: ({
    params,
    onSuccess,
  }: {
    params: {
      name: string;
      contents: string;
    };
    onSuccess: any;
  }) => ({
    mutationFn: () => productService.postNewProduct({ params }),
    onSuccess: onSuccess,
  }),
  productQAList: ({ productId }: { productId: number }) => ({
    queryKey: queryKeys.productQAList(productId),
    queryFn: () => productService.getProductQAList({ productId }),
  }),
  productQATarget: ({ id }: { id: number | undefined }) => ({
    queryKey: queryKeys.productQAItem(id),
    queryFn: () => productService.getProductQAItem({ id }),
    enabled: !!id,
  }),
  updatetcItem: ({
    id,
    contents,
    onSuccess,
  }: {
    id: number;
    contents: string;

    onSuccess: any;
  }) => ({
    mutationFn: () => productService.updateTCItem({ id, contents }),
    onSuccess: onSuccess,
  }),
  addtcItem: ({ onSuccess }: { onSuccess?: any }) => ({
    mutationFn: ({ id }: { id: number }) => productService.AddTCItem({ id }),
    onSuccess: onSuccess,
  }),
  deletetcItem: ({ onSuccess }: { onSuccess?: any }) => ({
    mutationFn: ({ id }: { id: number }) => productService.DeleteTCItem({ id }),
    onSuccess: onSuccess,
  }),
  deletetc: ({ onSuccess }: { onSuccess?: any }) => ({
    mutationFn: ({ id }: { id: number }) => productService.DeleteTC({ id }),
    onSuccess: onSuccess,
  }),
  saveProduct: ({ onSuccess }: { onSuccess?: any }) => ({
    mutationFn: ({ id , status}: { id: number , status: string}) => productService.SaveProduct({ id, status }),
    onSuccess: onSuccess,
  }),
};

export { queryOptions };
