import { Box, Grid } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "detailEz login",
  description: "디테일이지 로그인 화면입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box height="100%">
      <Grid container direction="row" height="100%">
        <Grid item xs={7}></Grid>
        <Grid
          item
          xs={5}
          bgcolor="bg.deGreen.4"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
