import { CustomToggleButton2 } from "@/src/components/toggleButton";
import { reportStatus, reportStatusList } from "@/src/datas/products";
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
    <CustomToggleButton2
      onChange={handleAlignment}
      value={value}
      types={reportStatusList}
    />
  );
};

export default TypeButtons;
