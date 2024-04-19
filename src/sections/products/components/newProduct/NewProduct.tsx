import { CustomCard1 } from "@/src/components/cards";
import { useDialogs } from "@/src/hooks";
import { Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import NewProductDialog from "../dialogs/NewProductDialog";
import { AddCircleRounded } from "@mui/icons-material";

const NewProduct = () => {
  const theme = useTheme();
  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    new: false,
  });

  return (
    <>
      <CustomCard1
        sx={{
          height: theme.typography.pxToRem(218),
          bgcolor: "deGreen.3",
          color: "dePurple.1",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "deGreen.2",
            color: "white",
          },
        }}
        onClick={() => {
          handleOpenDialog("new");
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <AddCircleRounded />
          <Typography>신규 QA 생성</Typography>
        </Stack>
      </CustomCard1>
      <NewProductDialog
        open={!!dialogs?.new}
        onCancel={() => handleCloseDialog("new")}
      />
    </>
  );
};
export default NewProduct;
