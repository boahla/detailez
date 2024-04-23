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
        <Button size="small" onClick={() => router.push(`/products`)}>
          임시저장
        </Button>
      </Stack>
    </Stack>

    // <Stack direction="row" justifyContent="space-between">
    //   <Stack>{name}</Stack>
    //   <Button onClick={() => router.push(`/products`)}>임시저장</Button>
    // </Stack>
  );
};
export default Header;
