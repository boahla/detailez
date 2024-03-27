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

  const countRes = (val: number) => ((val / data.tc_count) * 100).toFixed(0);
  return (
    <CustomCard1>
      <Stack direction="column" spacing={2}>
        <Box>테스트 결과</Box>

        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={2.4}>
              <CustomCard1 sx={{ bgcolor: "#46c18e" }}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack>총 tc{data.tc_count}개</Stack>
                </Stack>
              </CustomCard1>
            </Grid>
            <ResultGraph count={countRes(data.pass_count)} type="success" />
            <ResultGraph count={countRes(data.error_count)} type="error" />
            <ResultGraph count={countRes(data.hold_count)} type="hold" />
            <ResultGraph count={countRes(data.cancel_count)} type="cancel" />
          </Grid>
        </Box>
      </Stack>
    </CustomCard1>
  );
};

export default Results;

// items.tc_count - items.before_count
