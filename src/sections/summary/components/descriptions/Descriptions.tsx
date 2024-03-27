import { CustomCard1 } from "@/src/components/cards";
import { useDialogs, useMobile } from "@/src/hooks";
import { IProductItem } from "@/src/services/products/types";
import { useEndProduct } from "@/src/services/products/useProducts";
import { Button, Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ReactNode } from "react";
import ProductEndDialog from "../dialogs/ProductEndDialog";

const Descriptions = ({
  data,
  isLoading,
  isOwn,
}: {
  data: IProductItem | undefined;
  isLoading: boolean;
  isOwn: boolean;
}) => {
  const { isMobile } = useMobile();
  const router = useRouter();
  const { productId } = useParams();

  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    end: false,
  });

  const { mutate: handleEndProduct } = useEndProduct({});

  if (isLoading) return <>loading</>;
  if (!data) return <>데이터 없음</>;

  return (
    <CustomCard1>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
      >
        <Stack direction="column" spacing={2}>
          <DescForms label="프로젝트명">{data.name}</DescForms>
          <DescForms label="추가 설명">{data.contents}</DescForms>
          <DescForms label="TC 작성자">{data.email}</DescForms>
        </Stack>
        <Stack direction={"row"} spacing={1} alignItems="start">
          {data.status === "start" && (
            <Button
              variant="contained"
              sx={{ color: "green" }}
              onClick={() => router.push(`/testcase/${productId}`)}
            >
              테스트 시작
            </Button>
          )}
          {data.status === "end" && (
            <Button
              variant="contained"
              sx={{ color: "green" }}
              onClick={() => router.push(`/complete/${productId}`)}
            >
              qa 결과 상세보기
            </Button>
          )}
          {data.status === "start" && isOwn && (
            <Button
              variant="contained"
              sx={{ color: "green" }}
              onClick={() => {
                handleOpenDialog("end")();
              }}
            >
              프로젝트 qa 종료
            </Button>
          )}
        </Stack>
      </Stack>
      <ProductEndDialog
        open={!!dialogs?.end}
        onCancel={() => handleCloseDialog("end")()}
        onSubmit={() => {
          handleEndProduct({ id: Number(productId) });
          handleCloseDialog("end")();
          router.push(`/products`);
        }}
      />
    </CustomCard1>
  );
};
export default Descriptions;

const DescForms = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Stack width={100}>{label}</Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
};
