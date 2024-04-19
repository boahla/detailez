import productService from "@/src/services/products/productService";
import { IQATargetItem } from "@/src/services/products/types";
import { useDeleteTCItem } from "@/src/services/products/useProducts";
import { Cancel } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const ContentsTextfield = ({
  item,
  load,
}: {
  item: IQATargetItem;
  load: any;
}) => {
  const [value, setValue] = useState(item.contents);
  const onBlur = async () => {
    await productService.updateTCItem({ id: item.id, contents: value });
  };

  const { mutate: handleDeleteTcItem } = useDeleteTCItem({
    onSuccess: () => load(),
  });
  const onDelete = () => {
    handleDeleteTcItem({ id: Number(item.id) });
  };
  return (
    <Stack key={item.id}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        placeholder="Test Case를 작성하세요."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton sx={{ p: 0 }} onClick={onDelete}>
                <Cancel />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          bgcolor: "deGray.5",
          "& fieldset": {
            border: "none",
          },
          "& .MuiInputAdornment-root": {
            "& svg": { color: "deGray.3" },
          },
        }}
      />
    </Stack>
  );
};
export default ContentsTextfield;
