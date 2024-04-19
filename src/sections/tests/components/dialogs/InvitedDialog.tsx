import { useAcceptInvite } from "@/src/services/invites/useInvites";
import { IProductReportItem } from "@/src/services/reports/types";
import { EmailOutlined } from "@mui/icons-material";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

const InvitedDialog = ({
  open,
  onCancel,
  //   onSubmit,
  item,
}: {
  open: boolean;
  onCancel: () => void;
  //   onSubmit: () => void;
  item: IProductReportItem;
}) => {
  const theme = useTheme();
  const router = useRouter();
  const { mutate: onAcceptInvite } = useAcceptInvite({
    onSuccess: () => {
      router.push(`/summary/${item.product_id}`);
    },
  });
  const onSubmit = () => onAcceptInvite({ id: item.product_id });
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogContent
        sx={{
          px: theme.typography.pxToRem(30),
          pt: theme.typography.pxToRem(40),
        }}
      >
        <Stack
          direction="column"
          spacing={theme.typography.pxToRem(20)}
          sx={{ bgcolor: "deGray.4" }}
          p={theme.typography.pxToRem(20)}
          borderRadius="10px"
        >
          <Stack direction="column" alignItems="center" spacing={1}>
            <Chip
              icon={<EmailOutlined />}
              label="테스트 초대"
              sx={{
                bgcolor: "dePurple.1",
                color: "white",
                height: theme.typography.pxToRem(36),
                px: 1,
                "& svg": { color: "white !important" },
              }}
            />
            <Typography color="dePurple.1">
              {item.user_name}님으로부터 테스트 초대가 왔어요.
            </Typography>
          </Stack>

          <Stack direction="column" spacing={theme.typography.pxToRem(10)}>
            <FormLayout label="프로젝트명" value={item.name} />
            <FormLayout label="추가 설명" value={item.contents} />
            <FormLayout label="TC 작성자" value={item.email} />
            <FormLayout label="총 슬라이드 수" value={item.page_cnt} />
            <FormLayout label="총 TC 수" value={item.tc_cnt} />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          px: theme.typography.pxToRem(30),
          pb: theme.typography.pxToRem(40),
        }}
      >
        <Button onClick={onCancel} size="small" variant="outlined" fullWidth>
          취소
        </Button>
        <Button onClick={onSubmit} size="small" fullWidth>
          수락
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default InvitedDialog;

const FormLayout = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <Stack
      direction="row"
      spacing={4}
      p={2}
      alignItems="center"
      borderRadius="10px"
      sx={{ bgcolor: "white" }}
    >
      <Stack width="100px">
        <Typography color="dePurple.1">{label}</Typography>
      </Stack>
      <Stack>
        <Typography color="deGray.1">{value}</Typography>
      </Stack>
    </Stack>
  );
};
