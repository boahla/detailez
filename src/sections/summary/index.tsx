"use client";
import { Grid, Stack } from "@mui/material";
import Descriptions from "./components/descriptions/Descriptions";
import Results from "./components/results/Results";
import { useGetProduct } from "@/src/services/products/useProducts";
import { useParams } from "next/navigation";
import { useGetProductReport } from "@/src/services/reports/useProducts";
import Issues from "./components/issues/Issues";
import Testers from "./components/testers/Testers";
import { useMobile } from "@/src/hooks";

const Summary = () => {
  const { isMobile } = useMobile();
  const { productId } = useParams();
  const description = useGetProduct({ productId: Number(productId) });
  const report = useGetProductReport({ productId: Number(productId) });

  const { data: descriptions } = description;
  const { data: reports } = report;

  return (
    <Stack direction="column" spacing={3}>
      <Descriptions {...description} isOwn={!!reports?.product_owner} />
      {reports?.product_owner && <Results {...report} />}

      <Stack direction={isMobile ? "column" : "row"} spacing={3}>
        <Issues />
        <Testers />
      </Stack>
    </Stack>
  );
};
export default Summary;
