import { ProductStatusChip } from "@/src/components/chips";
import { IProductReportItem } from "@/src/services/reports/types";
import { Stack } from "@mui/material";

// status === "start"
// ? { label: "테스트 중", type: "emphasis" }
// : status === "end"
// ? { label: "프로젝트 완료", type: "disabled" }
// : status === "ing"
// ? { label: "QA 생성중", type: "default" }
// : { label: "-", type: "disabled" };
const ProductHeader = ({ item }: { item: IProductReportItem }) => {
  const testStatus =
    item.status === "complete"
      ? { label: "프로젝트 완료", type: "disabled" }
      : item.status === "end"
      ? { label: "테스트 완료", type: "disabled" }
      : item.status === "ing"
      ? { label: "테스트 중", type: "default" }
      : item.status === "invite"
      ? { label: "새 초대", type: "emphasis" }
      : { label: "-", type: "disabled" };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {!!testStatus && (
        <ProductStatusChip type={testStatus.type} label={testStatus.label} />
      )}
    </Stack>
  );
};
export default ProductHeader;
