import { useGetReportUser } from "@/src/services/reports/useProducts";
import {
  Box,
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
  if (isLoading) return <Skeleton height={300} width="100%" />;
  if (!data || !data.length) return <>데이터 없음</>;

  const tablecellItem = (
    column: { id: string; label: string },
    item: IReportUserItem
  ) => {
    const { id } = column;
    if (id === "name")
      return <Typography variant="nm-regular">{item[id]}</Typography>;
    if (id === "progress")
      return (
        <Typography variant="nm-regular">
          {item.tc_count - item.before_count}개 /{item.tc_count}개
        </Typography>
      );
    if (
      id === "pass_count" ||
      id === "error_count" ||
      id === "hold_count" ||
      id === "cancel_count"
    )
      return <Typography variant="nm-regular">{item[id]}</Typography>;

    return <></>;
  };
  return (
    <CustomCard1>
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography color="dePurple.1" variant="nm-bold">
            참여한 테스터
          </Typography>
        </Box>
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
            {!!data && !!data.length && (
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
            )}
          </Table>
          {(!data || !data.length) && (
            <Stack width="100%" alignItems="center" py={5}>
              참여한 테스터가 없습니다.
            </Stack>
          )}
        </TableContainer>
      </Stack>
    </CustomCard1>
  );
};
export default Testers;
