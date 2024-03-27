import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
    <Dialog open={open}>
      <DialogTitle>프로젝트 QA 완료</DialogTitle>
      <DialogContent>
        테스트를 완료하지 않은 테스터가 있습니다.
        <br />
        테스트 종료하시면, <br />더 이상 해당 프로젝트 테스트 진행 및 결과
        변경을 할 수 없습니다.
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>취소</Button>
        <Button onClick={onSubmit}>확인</Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProductEndDialog;
