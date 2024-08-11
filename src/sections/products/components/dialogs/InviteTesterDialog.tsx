import { useInviteTesters } from "@/src/services/invites/useInvites";
import { Close, MailOutlineOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const InviteTesterDialog = ({
  open,
  onCancel,
  itemId,
}: {
  open: boolean;
  onCancel: () => void;
  itemId: string | number;
}) => {
  const { mutate: onInviteTesters } = useInviteTesters({
    onSuccess: () => {
      onCancel();
    },
  });
  const [emails, setEmails] = useState<string[]>([]);
  const onDeleteEmail = (item: string) => {
    setEmails((prev) => {
      const res = emails.filter((t) => t !== item);
      return res;
    });
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        onCancel();
        setEmails([]);
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ px: 4, pt: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip
              icon={<MailOutlineOutlined />}
              label="초대하기"
              sx={{
                bgcolor: "dePurple.1",
                color: "white",
                "& .MuiChip-icon": { color: "white", ml: 1.2 },
              }}
            />
            <Typography color="dePurple.1">
              테스트에 참여할 멤버를 초대하세요.
            </Typography>
          </Stack>
          <IconButton
            onClick={() => {
              onCancel();
              setEmails([]);
            }}
          >
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ px: 4, mt: 2 }}>
        <Stack direction="column">
          <TextField
            placeholder="이메일을 입력하세요."
            name="contents"
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                var validRegex =
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                if (e.target.value.match(validRegex)) {
                  setEmails((prev) => [...prev, e.target.value]);
                } else {
                  alert("올바른 이메일을 입력하세요.");
                }
              }
            }}
            id="contents"
            fullWidth
            //   error={!!errors.contents}
          />

          {!!emails.length && (
            <Stack spacing={1.2} direction="column" my={1.2}>
              {emails.map((item, idx) => (
                <Stack
                  key={idx}
                  py={1.4}
                  pr={1.2}
                  pl={1.4}
                  alignItems="center"
                  justifyContent="space-between"
                  direction="row"
                  sx={{ bgcolor: "deGray.5", borderRadius: "10px" }}
                >
                  <Typography sx={{ color: "deGray.1" }}>{item}</Typography>
                  <IconButton onClick={() => onDeleteEmail(item)}>
                    <Close />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </DialogContent>
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
          disabled={!emails.length}
          onClick={() => onInviteTesters({ email: emails, id: itemId })}
          fullWidth
          sx={{ bgcolor: "deGreen.1", color: "white", ml: "16px !important" }}
        >
          초대하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default InviteTesterDialog;
