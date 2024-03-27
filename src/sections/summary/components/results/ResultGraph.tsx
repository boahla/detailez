import { CustomCard1 } from "@/src/components/cards";
import { Grid, Stack } from "@mui/material";

const types = {
  success: "성공",
  error: "오류",
  hold: "보류",
  cancel: "취소",
};

const ResultGraph = ({
  count,
  type,
}: {
  count: number | string;
  type: "success" | "error" | "hold" | "cancel";
}) => {
  return (
    <Grid item xs={12} md={2.4}>
      <CustomCard1 sx={{ bgcolor: "#46c18e" }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>{types[type]}</Stack>
          <Stack>{count}%</Stack>
          {/* <Stack>
            <CircularProgress
              sx={{
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round",
                  color: "black",
                },
                color: (theme) =>
                  theme.palette.grey[
                    theme.palette.mode === "light" ? 200 : 800
                  ],
              }}
              variant="determinate"
              value={count}
            />
          </Stack> */}
        </Stack>
      </CustomCard1>
    </Grid>
  );
};
export default ResultGraph;
