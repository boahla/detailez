import { CustomCard1 } from "@/src/components/cards";
import {
  Card,
  CircularProgress,
  Grid,
  Stack,
  circularProgressClasses,
} from "@mui/material";

const ResultGraph = ({
  count,
  type,
}: {
  count: number;
  type: "success" | "error" | "hold" | "cancel";
}) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <CustomCard1 sx={{ bgcolor: "#46c18e" }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            {type === "success" && "성공"}
            {type === "error" && "오류"}
            {type === "hold" && "보류"}
            {type === "cancel" && "취소"}
          </Stack>
          <Stack>
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
          </Stack>
        </Stack>
      </CustomCard1>
    </Grid>
  );
};
export default ResultGraph;
