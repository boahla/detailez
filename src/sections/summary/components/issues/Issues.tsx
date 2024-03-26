import { useGetReportStatus } from "@/src/services/reports/useProducts";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IssueColumns } from "../../datas/tables";
import { IReportStatusItem } from "@/src/services/reports/types";
import { CustomCard1 } from "@/src/components/cards";

const Issues = () => {
  const { productId } = useParams();
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetReportStatus({
    productId: Number(productId),
    pageNum: page,
    pageSize: 10,
  });
  if (isLoading) return <>loading</>;
  if (!data) return <>데이터 없음</>;

  const tablecellItem = (
    column: { id: string; label: string },
    item: IReportStatusItem
  ) => {
    const { id } = column;
    if (id === "name") return <>{item[id]}</>;
    if (id === "page")
      return (
        <>
          page{item["page_order"]} {item["tc_order"]}
        </>
      );
    if (id === "contents") return <>{item["contents"]}</>;
    if (id === "status") return <>{item["status"]}</>;
    return <></>;
  };
  return (
    <CustomCard1>
      <Box>이슈 리스트</Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {IssueColumns.map((column) => (
                <TableCell
                  key={column.id}
                  // align={column.align}
                  // style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
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
        </Table>
      </TableContainer>
    </CustomCard1>
  );
};
export default Issues;
