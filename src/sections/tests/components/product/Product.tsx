import { formatDate } from "@/src/utils/format";
import { Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import ProductHeader from "./ProductHeader";
import { CustomCard1 } from "@/src/components/cards";
import { IProductReportItem } from "@/src/services/reports/types";
import InvitedDialog from "../dialogs/InvitedDialog";
import { useDialogs } from "@/src/hooks";

const Product = ({ item }: { item: IProductReportItem }) => {
  const router = useRouter();
  const theme = useTheme();

  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    invite: false,
  });

  const onMoveProducts = () => {
    if (item.status === "invite") handleOpenDialog("invite");
    else router.push(`/summary/${item.product_id}`);
  };

  return (
    <CustomCard1 sx={{ height: theme.typography.pxToRem(218) }}>
      <Stack direction="column" spacing={3}>
        <ProductHeader item={item} />
        <Stack
          direction="column"
          sx={{ cursor: "pointer" }}
          onClick={onMoveProducts}
          spacing={1.5}
        >
          <Stack
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              wordBreak: "break-word",
              display: " -webkit-box",
              WebkitLineClamp: "2", // 원하는 라인수
              WebkitBoxOrient: "vertical",
              color: "deGray.1",
              // ...theme.typography["nm-bold"],
            }}
          >
            <Typography variant="nm-bold">{item.name}</Typography>
          </Stack>

          <Typography color="deGray.1" variant="nm-regular">
            {!!item.contents ? item.contents : "추가 설명 없음"}
          </Typography>
        </Stack>
      </Stack>
      <InvitedDialog
        open={!!dialogs?.invite}
        onCancel={() => handleCloseDialog("invite")}
        item={item}
      />
    </CustomCard1>
  );
};

export default Product;
