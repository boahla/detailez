import { CustomCard1 } from "@/src/components/cards";
import { IProductReport } from "@/src/services/reports/types";
import {
  Box,
  Grid,
  Skeleton,
  Stack,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import ResultGraph from "./ResultGraph";
import { ReactNode } from "react";
import {
  BackHand,
  CheckCircleRounded,
  NewReleases,
  RemoveCircleRounded,
} from "@mui/icons-material";

const Results = ({
  data,
  isLoading,
}: {
  data: IProductReport | undefined;
  isLoading: boolean;
}) => {
  const theme = useTheme();
  if (isLoading) return <Skeleton height="200px" />;
  if (!data) return <>데이터 없음</>;

  const countRes = (val: number) => ((val / data.tc_count) * 100).toFixed(0);
  return (
    <CustomCard1>
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography color="dePurple.1" variant="nm-regular">
            테스트 결과
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={4}
            sx={{
              "& .MuiTypography-root ": {
                ...theme.typography["nm-bold"],
              },
            }}
          >
            <GridCard
              sx={{
                border: `solid 1px ${theme.palette.dePurple[1]}`,
                boxSizing: "border-box",
                "& .MuiStack-root": {
                  justifyContent: "center !important",
                },
              }}
            >
              <Typography textAlign="center" color="dePurple.1">
                총 TC {data.tc_count}개
              </Typography>
            </GridCard>
            <GridCard sx={{ bgcolor: "deGreen.4" }}>
              <Typography color="deGreen.1">
                <CheckCircleRounded />
                성공
              </Typography>
              <Typography color="deGreen.1">
                {countRes(data.pass_count)}%
              </Typography>
            </GridCard>
            <GridCard sx={{ bgcolor: "deError.bg" }}>
              <Typography color="deError.main">
                <NewReleases />
                오류
              </Typography>
              <Typography color="deError.main">
                {countRes(data.error_count)}%
              </Typography>
            </GridCard>
            <GridCard sx={{ bgcolor: "dePrimary.bg" }}>
              <Typography color="dePrimary.main">
                <BackHand />
                보류
              </Typography>
              <Typography color="dePrimary.main">
                {countRes(data.hold_count)}%
              </Typography>
            </GridCard>
            <GridCard sx={{ bgcolor: "deGray.5" }}>
              <Typography color="deGray.2">
                <RemoveCircleRounded />
                취소
              </Typography>
              <Typography color="deGray.2">
                {countRes(data.cancel_count)}%
              </Typography>
            </GridCard>
          </Grid>
        </Box>
      </Stack>
    </CustomCard1>
  );
};

export default Results;

// items.tc_count - items.before_count

const GridCard = ({
  children,
  sx,
  ...props
}: {
  children: ReactNode;
  sx?: SxProps;
}) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={2.4}>
      <CustomCard1
        sx={{
          ...sx,
          padding: theme.typography.pxToRem(20),
          "& .MuiTypography-root": {
            display: "flex",
            alignItems: "center",
          },
          "& svg": {
            mr: 0.7,
            width: 30,
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {children}
        </Stack>
      </CustomCard1>
    </Grid>
  );
};
