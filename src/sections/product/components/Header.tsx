import { Stack } from "@mui/material";

interface IHeader {
  name: string | undefined;
}

const Header = ({ name }: IHeader) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack>{name}</Stack>
    </Stack>
  );
};
export default Header;
