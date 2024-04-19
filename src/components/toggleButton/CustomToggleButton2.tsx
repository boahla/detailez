import {
  productStatus,
  reportStatus,
  reportStatusList,
} from "@/src/datas/products";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    marginRight: theme.spacing(1.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    color: theme.palette.dePurple[1],
    padding: "12px 20px",
    "&.Mui-selected": {
      backgroundColor: theme.palette.dePurple[1],
      color: "white",
      borderRadius: "40px",
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

interface Typeprops {
  label: string;
  value: string;
}
const CustomToggleButton2 = ({
  onChange,
  value,
  types,
}: {
  onChange: any;
  value: reportStatus | productStatus;
  types: Typeprops[];
}) => {
  return (
    <StyledToggleButtonGroup
      size="small"
      value={value}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
    >
      {types.map((item) => (
        <ToggleButton
          key={item.value}
          value={item.value}
          aria-label={item.value}
        >
          {item.label}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
export default CustomToggleButton2;
