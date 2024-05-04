import { Box, Grid, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import LoginImage1 from "@/public/login/login_img_1.png";
import LoginImage2 from "@/public/login/login_img_2.png";
import LoginImage3 from "@/public/login/login_img_3.png";
import LoginImage4 from "@/public/login/login_img_4.png";
import { useMobile } from "@/src/hooks";
// import { useMobile } from "@/src/hooks";

export const metadata: Metadata = {
  title: "detailEz login",
  description: "디테일이지 로그인 화면입니다.",
};

const RandomLogin = {
  1: {
    img: LoginImage1,
    label: (
      <>
        QA TEST를 꼼꼼하고
        <br />
        편하게 협업하세요!
      </>
    ),
  },
  2: {
    img: LoginImage2,
    label: (
      <>
        QA TEST를 꼼꼼하고
        <br />
        편하게 협업하세요!
      </>
    ),
  },
  3: {
    img: LoginImage3,
    label: (
      <>
        기획서를 함께 보며
        <br />
        테스트에 참여해요!
      </>
    ),
  },
  4: {
    img: LoginImage4,
    label: (
      <>
        기획서를 함께 보며
        <br />
        테스트에 참여해요!
      </>
    ),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box height="100vh">
      <Grid container direction="row" height="100%">
        <Grid
          item
          xs={12}
          md={6.5}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack width="60%" direction="column" spacing={3} py={5}>
            <Typography
              sx={{ color: "dePurple.1" }}
              fontSize={42}
              lineHeight="58px"
              textAlign="center"
            >
              {RandomLogin[1].label}
            </Typography>
            <Image
              src={RandomLogin[1].img}
              alt="img"
              layout="responsive"
              objectFit="cover"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={5.5}
          bgcolor="deGreen.4"
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
