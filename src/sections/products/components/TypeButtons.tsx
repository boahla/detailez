import { productStatus, productStatusList } from "@/src/datas/products";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface TypeButtonsProps {
  value: productStatus;
  setValue: Dispatch<SetStateAction<productStatus>>;
}

const TypeButtons = ({ value, setValue }: TypeButtonsProps) => {
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: productStatus | null
  ) => {
    if (newAlignment !== null) {
      setValue(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {productStatusList.map((item) => (
        <ToggleButton key={item} value={item}>
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default TypeButtons;
