import { Box, Grid } from "@mui/material";
import { Product } from "./product";
import { IProductReportItem } from "@/src/services/reports/types";
interface ProducListsProps {
  data: IProductReportItem[] | undefined;
  isLoading: boolean;
}

const ProductLists = ({ data, isLoading }: ProducListsProps) => {
  if (isLoading) return <>loading</>;
  return (
    <Box>
      <Grid container spacing={3}>
        {!!data &&
          data.map((item: any, index: number) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
              <Product item={item} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default ProductLists;
