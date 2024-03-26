import { reportStatus, reportStatusList } from "@/src/datas/products";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface TypeButtonsProps {
  value: reportStatus;
  setValue: Dispatch<SetStateAction<reportStatus>>;
}

const TypeButtons = ({ value, setValue }: TypeButtonsProps) => {
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: reportStatus | null
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
      {reportStatusList.map((item) => (
        <ToggleButton key={item} value={item}>
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default TypeButtons;
