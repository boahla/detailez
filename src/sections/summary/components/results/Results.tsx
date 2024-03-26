import { CustomCard1 } from "@/src/components/cards";
import { IProductReport } from "@/src/services/reports/types";
import { Box, Grid, Stack } from "@mui/material";
import ResultGraph from "./ResultGraph";

const Results = ({
  data,
  isLoading,
}: {
  data: IProductReport | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) return <>loading</>;
  if (!data) return <>데이터 없음</>;
  return (
    <CustomCard1>
      <Stack direction="column" spacing={2}>
        <Box>테스트 결과</Box>
        <Box>총 {data.tc_count}개</Box>
        <Box>
          <Grid container spacing={4}>
            <ResultGraph count={data.pass_count} type="success" />
            <ResultGraph count={data.error_count} type="error" />
            <ResultGraph count={data.hold_count} type="hold" />
            <ResultGraph count={data.cancel_count} type="cancel" />
          </Grid>
        </Box>
      </Stack>
    </CustomCard1>
  );
};

export default Results;

// items.tc_count - items.before_count
