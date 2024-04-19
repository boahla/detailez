import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const ProductEndDialog = ({
  open,
  onCancel,
  onSubmit,
}: {
  open: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ pt: 4, pb: 3 }}>
        <Typography color="dePurple.1"> 프로젝트 QA 완료</Typography>
      </DialogTitle>
      <DialogContent sx={{ px: 4, pb: 3 }}>
        <Typography color="deGray.1" mb={2}>
          테스트를 완료하지 않은 테스터가 있습니다.
        </Typography>
        <Typography color="deGray.1">
          테스트 종료하시면, <br />더 이상 해당 프로젝트 테스트 진행 및 결과
          변경을 할 수 없습니다.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ pb: 4, px: 4 }}>
        <Button onClick={onCancel} size="small" variant="outlined">
          취소
        </Button>
        <Button onClick={onSubmit} size="small">
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProductEndDialog;
