import { LAYOUTS_NUMBERS } from "@/src/datas";
import { Button, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "next-auth/react";
import SignInButton from "@/src/components/layouts/components/SignInButton";
import { useRouter } from "next/navigation";

interface HeaderProps {
  open: boolean;
  onClick: () => void;
}

const Header = ({ open, onClick }: HeaderProps) => {
  const router = useRouter();
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          onClick={() => router.push(`/products`)}
          color="GrayText"
        >
          ㄷㅣ떼일 d이지
        </Typography>
        <IconButton
          color="info"
          aria-label="open drawer"
          onClick={onClick}
          edge="start"
          sx={{ mx: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <SignInButton />
      </Toolbar>
    </AppBar>
  );
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  boxShadow: "none",
  background: "white",
  zIndex: 1201,
  height: LAYOUTS_NUMBERS.headerHeight,
}));

export default Header;
