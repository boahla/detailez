import { TC_STATUS_TYPES } from "@/src/datas/products";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

type ButtonTypeProps = "pass" | "cancel" | "hold" | "error" | null;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  height: theme.typography.pxToRem(28),
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    marginRight: theme.spacing(1),
    border: 0,
    borderRadius: "30px",
    padding: "2px 8px",
    backgroundColor: theme.palette.deGray[4],
    color: theme.palette.dePurple[1],
    "& svg": {
      width: "20px",
      height: "20px",
      marginRight: "4px",
    },
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
  value: ButtonTypeProps;
}) => {
  const theme = useTheme();

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
          sx={{
            minWidth: 52,
            ...(item.value === alignment && {
              border: `solid 1px ${
                item.value === "pass"
                  ? theme.palette.deGreen[1]
                  : item.value === "cancel"
                  ? theme.palette.deGray[1]
                  : item.value === "hold"
                  ? theme.palette.dePrimary.main
                  : item.value === "error"
                  ? theme.palette.deError.main
                  : "black"
              } !important`,
              color: `${
                item.value === "pass"
                  ? theme.palette.deGreen[1]
                  : item.value === "cancel"
                  ? theme.palette.deGray[1]
                  : item.value === "hold"
                  ? theme.palette.dePrimary.main
                  : item.value === "error"
                  ? theme.palette.deError.main
                  : "black"
              } !important`,
              bgcolor: `${
                item.value === "pass"
                  ? theme.palette.deGreen[4]
                  : item.value === "cancel"
                  ? theme.palette.deGray[4]
                  : item.value === "hold"
                  ? theme.palette.dePrimary.bg
                  : item.value === "error"
                  ? theme.palette.deError.bg
                  : "black"
              } !important`,
              "& p": { fontWeight: 700 },
            }),
          }}
        >
          {item.value === alignment && item.icon}
          <Typography>{item.label}</Typography>
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
export default CustomToggleButton1;
