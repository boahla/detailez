import { CustomCard1 } from "@/src/components/cards";
import { useMobile } from "@/src/hooks";
import { IProductItem } from "@/src/services/products/types";
import { Button, Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ReactNode } from "react";

const Descriptions = ({
  data,
  isLoading,
}: {
  data: IProductItem | undefined;
  isLoading: boolean;
}) => {
  const { isMobile } = useMobile();
  const router = useRouter();
  const { productId } = useParams();
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
        <Stack>
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
            <Button variant="contained" sx={{ color: "green" }}>
              qa 결과 상세보기
            </Button>
          )}
        </Stack>
      </Stack>
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
