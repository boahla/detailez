import { TC_STATUS_TYPES } from "@/src/datas/products";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

const CustomToggleButton1 = ({
  onChange,
  id,
  value,
}: {
  onChange?: any;
  id: number;
  value: "pass" | "cancel" | "hold" | "error" | null;
}) => {
  const [alignment, setAlignment] = useState(value);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: "pass" | "cancel" | "hold" | "error" | null
  ) => {
    if (!onChange) return;
    setAlignment(newAlignment);
    onChange({ tc: id, status: newAlignment });
  };

  return (
    <StyledToggleButtonGroup
      size="small"
      value={alignment}
      exclusive
      {...(!!onChange && { onChange: handleAlignment })}
      aria-label="text alignment"
    >
      {TC_STATUS_TYPES.map((item) => (
        <ToggleButton
          key={item.value}
          value={item.value}
          aria-label={item.value}
          disableRipple={!onChange}
        >
          {item.label}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
export default CustomToggleButton1;
