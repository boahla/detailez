import { ISaveProductResult } from "@/src/services/products/types";
import { useSaveProduct } from "@/src/services/products/useProducts";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";

interface IHeader {
  name: string | undefined;
}

const Header = ({ name }: IHeader) => {
  const router = useRouter();
  const theme = useTheme();
  const { productId } = useParams();
  const { mutate: handleSave } = useSaveProduct({
    onSuccess: (value: ISaveProductResult) => {
      if (value?.code === 400) {
        // 틀린 애들 retry 하도록
        alert("test case 작성하지 않은 곳 확인");
      } else if (value?.code == 201) {
        router.push("/products");
      }
    },
  });
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
          variant="outlined"
          onClick={() => {
            router.push(`/products`);
          }}
        >
          임시저장
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            handleSave({ id: Number(productId), status: "start" });
          }}
        >
          QA 생성 완료
        </Button>
      </Stack>
    </Stack>
  );
};
export default Header;
