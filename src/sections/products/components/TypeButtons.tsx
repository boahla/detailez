import { CustomToggleButton2 } from "@/src/components/toggleButton";
import { productStatus, productStatusList } from "@/src/datas/products";
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
    <CustomToggleButton2
      onChange={handleAlignment}
      value={value}
      types={productStatusList}
    />
  );
};

export default TypeButtons;
