import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

interface IHeader {
  name: string | undefined;
}

const Header = ({ name }: IHeader) => {
  const router = useRouter();
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack>{name}</Stack>
      <Button onClick={() => router.push(`/products`)}>나가기</Button>
    </Stack>
  );
};
export default Header;
