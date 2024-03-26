import { formatDate } from "@/src/utils/format";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ProductHeader from "./ProductHeader";
import { CustomCard1 } from "@/src/components/cards";
import { IProductReportItem } from "@/src/services/reports/types";

const Product = ({ item }: { item: IProductReportItem }) => {
  const router = useRouter();

  const onMoveProducts = () => {
    router.push(`/summary/${item.product_id}`);
  };

  return (
    <CustomCard1>
      <Stack direction="column" spacing={3}>
        <ProductHeader item={item} />
        <Stack
          direction="column"
          onClick={onMoveProducts}
          sx={{ cursor: "pointer" }}
        >
          <Typography>{item.name}</Typography>
          <Typography>
            {!!item.contents ? item.contents : "추가 설명 없음"}
          </Typography>
        </Stack>
      </Stack>
    </CustomCard1>
  );
};

export default Product;
