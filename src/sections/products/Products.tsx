"use client";
import { productStatus } from "@/src/datas";
import { useGetProducts } from "@/src/services/products/useProducts";
import { Card, Stack } from "@mui/material";
import { useState } from "react";
import TypeButtons from "./components/TypeButtons";
import ProductLists from "./components/ProductLists";

const Products = ({}) => {
  const [status, setStatus] = useState<productStatus>("all");
  const { data, isLoading, refetch } = useGetProducts({ status });
  // if (isLoading) return <>loading</>;
  return (
    <Card elevation={0} sx={{ bgcolor: "transparent" }}>
      <Stack direction="column" spacing={3} p={3}>
        <TypeButtons value={status} setValue={setStatus} />
        <ProductLists data={data} isLoading={isLoading} load={refetch} />
      </Stack>
    </Card>
  );
};
export default Products;
