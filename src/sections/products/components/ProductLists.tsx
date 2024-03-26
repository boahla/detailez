import { IProductItem } from "@/src/services/products/types";
import { Box, Grid } from "@mui/material";
import { Product } from "./product";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { NewProduct } from "./newProduct";

interface ProducListsProps {
  data: IProductItem[] | undefined;
  isLoading: boolean;
  load: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IProductItem[] | undefined, Error>>;
}

const ProductLists = ({ data, isLoading, load }: ProducListsProps) => {
  if (isLoading) return <>loading</>;
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <NewProduct />
        </Grid>
        {!!data &&
          data.map((item: any, index: number) => (
            <Grid item key={index} xs={12} md={4} lg={3}>
              <Product item={item} load={load} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default ProductLists;
