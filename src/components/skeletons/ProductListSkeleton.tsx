import { Grid, Skeleton, Stack } from "@mui/material";

const ProductListSkeleton = () => {
  return (
    <Grid container spacing={3}>
      {new Array(7).fill(null).map((_, idx) => (
        <Grid key={idx} item xs={12} md={4} lg={3}>
          <Skeleton height={218} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductListSkeleton;
