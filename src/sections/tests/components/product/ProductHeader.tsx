import { IProductReportItem } from "@/src/services/reports/types";
import { Chip, Stack } from "@mui/material";

const ProductHeader = ({ item }: { item: IProductReportItem }) => {
  const testStatus =
    item.status === "complete"
      ? "프로젝트 완료"
      : item.status === "end"
      ? "테스트 완료"
      : item.status === "ing"
      ? "테스트 중"
      : item.status === "invite"
      ? "새 초대"
      : undefined;

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {!!testStatus && <Chip label={testStatus} />}
    </Stack>
  );
};
export default ProductHeader;
