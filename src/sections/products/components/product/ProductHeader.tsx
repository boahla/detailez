import { IProductItem } from "@/src/services/products/types";
import { MoreHoriz } from "@mui/icons-material";
import { Chip, IconButton, Menu, MenuItem, Stack, styled } from "@mui/material";
import { MouseEvent, useState } from "react";

const testStatus = (status: string) =>
  status === "start"
    ? { label: "테스트 중", type: "2" }
    : status === "end"
    ? { label: "프로젝트 완료", type: "disabled" }
    : status === "ing"
    ? { label: "QA 생성중", type: "1" }
    : { label: "-", type: "disabled" };

interface IProductHeader {
  item: IProductItem;
  onCancel: () => void;
  onCopy: () => void;
  onCopyStatus: () => void;
}
const ProductHeader = ({
  item,
  onCancel,
  onCopy,
  onCopyStatus,
}: IProductHeader) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleCancel = () => {
    onCancel();
    handleClose();
  };

  const handleCopy = () => {
    onCopy();
    handleClose();
  };

  const handleCopyStatus = () => {
    onCopyStatus();
    handleClose();
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      {!!testStatus && (
        <StyledChip
          type={testStatus(item.status).type}
          label={testStatus(item.status).label}
        />
      )}

      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ p: 0, bgcolor: "#f2f3f7 !important" }}
      >
        <MoreHoriz />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{}}
      >
        {(item.status === "start" || item.status === "end") && (
          <MenuItem onClick={handleCopy}>전체 복사</MenuItem>
        )}
        {(item.status === "start" || item.status === "end") && (
          <MenuItem onClick={handleCopyStatus}>이슈만 복사</MenuItem>
        )}
        {item.status === "ing" && (
          <MenuItem onClick={handleClose}>제목 변경</MenuItem>
        )}
        {item.status === "ing" && (
          <MenuItem onClick={handleClose}>설명 변경</MenuItem>
        )}
        {item.status !== "end" && (
          <MenuItem onClick={handleClose}>테스터 초대하기</MenuItem>
        )}
        <MenuItem onClick={handleCancel}>삭제</MenuItem>
      </Menu>
    </Stack>
  );
};
export default ProductHeader;

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "type",
})<{
  type?: string | undefined;
  // "disabled" | "1" | "2";
}>(({ theme, type }) => ({
  ...(type === "disabled" && {
    backgroundColor: theme.palette.deGray3,
    color: theme.palette.dePurple2,
  }),
  ...(type === "1" && {
    backgroundColor: theme.palette.deGreen1,
    color: "white",
  }),
  ...(type === "2" && {
    backgroundColor: theme.palette.deGreen4,
    color: theme.palette.deGreen1,
  }),
}));
