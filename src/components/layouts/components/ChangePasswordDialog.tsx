import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const ChangePasswordDialog = ({
  open,
  onCancel,
}: {
  open: boolean;
  onCancel: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ px: 4, pt: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography color="dePurple.1">비밀번호 변경</Typography>
          </Stack>
          <IconButton onClick={onCancel}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ px: 4, mt: 2 }}>1</DialogContent>
      <DialogActions sx={{ px: 4, pb: 4 }}>
        <Button
          onClick={onCancel}
          fullWidth
          sx={{
            bgcolor: "#F3F9F5",
            color: "deGreen.2",
            "&:hover": {
              bgcolor: "#F3F9F5",
            },
          }}
        >
          취소
        </Button>
        <Button
          // disabled={!emails.length}
          // onClick={() => onInviteTesters({ email: emails, id: itemId })}
          fullWidth
          sx={{ bgcolor: "deGreen.1", color: "white", ml: "16px !important" }}
        >
          초대하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ChangePasswordDialog;
