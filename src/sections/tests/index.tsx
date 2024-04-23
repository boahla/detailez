"use client";
import { useGetProductReports } from "@/src/services/reports/useProducts";
import { Card, Stack } from "@mui/material";
import { useState } from "react";
import ProductLists from "./components/ProductLists";
import { reportStatus } from "@/src/datas/products";
import TypeButtons from "./components/TypeButtons";

const Tests = ({}) => {
  const [status, setStatus] = useState<reportStatus>("all");
  const { data, isLoading } = useGetProductReports({ status });

  return (
    <Card elevation={0} sx={{ bgcolor: "transparent" }}>
      <Stack direction="column" spacing={3}>
        <TypeButtons value={status} setValue={setStatus} />
        <ProductLists data={data} isLoading={isLoading} />
      </Stack>
    </Card>
  );
};
export default Tests;
