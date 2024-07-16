import { useGetReportStatus } from "@/src/services/reports/useProducts";
import {
  Box,
  Chip,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IssueColumns } from "../../datas/tables";
import { IReportStatusItem } from "@/src/services/reports/types";
import { CustomCard1 } from "@/src/components/cards";
import { TCIssueChip } from "@/src/components/chips";
import { tcIssueStatus } from "@/src/datas/products";

const Issues = () => {
  const { productId } = useParams();
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetReportStatus({
    productId: Number(productId),
    pageNum: page,
    pageSize: 10,
  });
  if (isLoading) return <Skeleton height={300} width="100%" />;
  if (!data) return <>데이터 없음</>;

  const tablecellItem = (
    column: { id: string; label: string },
    item: IReportStatusItem
  ) => {
    const { id } = column;
    if (id === "name")
      return <Typography variant="nm-regular">{item[id]}</Typography>;

    if (id === "page")
      return (
        <Stack direction="row" spacing={0.5}>
          <Typography variant="nm-regular">page{item["page_order"]}</Typography>
          <Box
            sx={{
              backgroundColor: "deGreen.1",
              width: 24,
              height: 24,
              borderRadius: 100,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="nm-regular" color="white">
              {item["tc_order"]}
            </Typography>
          </Box>
        </Stack>
      );

    if (id === "status")
      return <TCIssueChip value={item["status"] as tcIssueStatus} />;

    return <></>;
  };
  return (
    <CustomCard1>
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography color="dePurple.1" variant="nm-bold">
            이슈 리스트
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {IssueColumns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            {!!data && !!data.length && (
              <TableBody>
                {data.map((item, idx) => (
                  <TableRow key={idx}>
                    {IssueColumns.map((column) => (
                      <TableCell key={column.id}>
                        {tablecellItem(column, item)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          {(!data || !data.length) && (
            <Stack width="100%" alignItems="center" py={5}>
              이슈 리스트가 없습니다.
            </Stack>
          )}
        </TableContainer>
      </Stack>
    </CustomCard1>
  );
};
export default Issues;
