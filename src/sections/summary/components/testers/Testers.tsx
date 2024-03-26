import { useGetReportUser } from "@/src/services/reports/useProducts";
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
import { IssueColumns, TesterColumns } from "../../datas/tables";
import {
  IReportStatusItem,
  IReportUserItem,
} from "@/src/services/reports/types";
import { CustomCard1 } from "@/src/components/cards";

const Testers = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetReportUser({
    productId: Number(productId),
  });
  if (isLoading) return <>loading</>;
  if (!data || !data.length) return <>데이터 없음</>;

  const tablecellItem = (
    column: { id: string; label: string },
    item: IReportUserItem
  ) => {
    const { id } = column;
    if (id === "name") return <>{item[id]}</>;
    if (id === "progress")
      return (
        <>
          {item.tc_count - item.before_count}개 /{item.tc_count}개
        </>
      );
    if (
      id === "pass_count" ||
      id === "error_count" ||
      id === "hold_count" ||
      id === "cancel_count"
    )
      return <>{item[id]}</>;

    return <></>;
  };
  return (
    <CustomCard1>
      <Box>참여한 테스터</Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {TesterColumns.map((column) => (
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
                {TesterColumns.map((column) => (
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
export default Testers;