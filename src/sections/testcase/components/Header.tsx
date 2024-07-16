import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

interface IHeader {
  name: string | undefined;
}

const Header = ({ name }: IHeader) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={theme.typography.pxToRem(20)}
      sx={{ borderBottom: `1px solid rgb(226, 227, 236)` }}
    >
      <Stack alignItems="center">
        <Typography color="deGray.1">{name}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="end" spacing={1.5}>
        <Button
          size="small"
          onClick={() => router.push(`/products`)}
          sx={{
            bgcolor: "white",
            border: "solid 1px",
            borderColor: "dePurple.1",
            px: "30px",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <Typography variant="nm-bold" color="dePurple.1">
            임시저장
          </Typography>
        </Button>
        <Button
          size="small"
          onClick={() => router.push(`/products`)}
          sx={{
            bgcolor: "deGreen.1",
            px: "30px",
          }}
        >
          <Typography variant="nm-bold" color="white">
            QA 테스트 완료
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
export default Header;
