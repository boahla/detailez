import { ISaveProductResult } from "@/src/services/products/types";
import { useSaveProduct } from "@/src/services/products/useProducts";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
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
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, zIndex: 1201 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
        <Stack direction="row" justifyContent="end">
          <Button
            variant="contained"
            onClick={() => {
              router.push(`/products`);
            }}
          >
            임시저장
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleSave({ id: Number(productId), status: "start" });
            }}
          >
            저장
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
