import { IProductItem } from "@/src/services/products/types";
import { formatDate } from "@/src/utils/format";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ProductHeader from "./ProductHeader";
import { CustomCard1 } from "@/src/components/cards";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import {
  useCopyProduct,
  useCopyProductStatus,
  useDeleteProduct,
} from "@/src/services/products/useProducts";

interface IProduct {
  item: IProductItem;
  load: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IProductItem[] | undefined, Error>>;
}

const Product = ({ item, load }: IProduct) => {
  const router = useRouter();

  const onMoveProducts = () => {
    if (item.status === "start" || item.status === "end") {
      router.push(`/summary/${item.id}`);
      return;
    }
    if (item.status === "ing") {
      router.push(`/product/${item.id}`);
      return;
    }
  };

  const { mutate: onDeleteProduct } = useDeleteProduct({
    productId: Number(item.id),
    onSuccess: () => load(),
  });
  const { mutate: onCopyProduct } = useCopyProduct({
    productId: Number(item.id),
    onSuccess: () => load(),
  });
  const { mutate: onCopyProductStatus } = useCopyProductStatus({
    productId: Number(item.id),
    onSuccess: () => load(),
  });

  const onCancel = () => {
    try {
      if (confirm("삭제하시겠습니까?")) {
        onDeleteProduct();
      }
    } catch (error) {
      // errorHandler(error);
    }
  };

  const onCopy = () => {
    try {
      if (confirm("복사하시겠습니까?")) {
        onCopyProduct();
      }
    } catch (error) {
      // errorHandler(error);
    }
  };

  const onCopyStatus = () => {
    try {
      if (confirm("복사하시겠습니까?")) {
        onCopyProductStatus();
      }
    } catch (error) {
      // errorHandler(error);
    }
  };

  return (
    <CustomCard1>
      <Stack direction="column" spacing={3}>
        <ProductHeader
          item={item}
          onCancel={onCancel}
          onCopy={onCopy}
          onCopyStatus={onCopyStatus}
        />
        <Stack
          direction="column"
          onClick={onMoveProducts}
          sx={{ cursor: "pointer" }}
        >
          <Typography>{item.name}</Typography>
          <Typography>
            {!!item.contents ? item.contents : "추가 설명 없음"}
          </Typography>
          <Typography>{formatDate({ date: item.created_at })}</Typography>
        </Stack>
      </Stack>
    </CustomCard1>
  );
};

export default Product;
