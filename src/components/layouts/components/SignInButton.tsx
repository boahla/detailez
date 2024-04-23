"use client";
import { useDialogs } from "@/src/hooks";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { MouseEvent, useState } from "react";
import ChangePasswordDialog from "./ChangePasswordDialog";

function SignInButton() {
  const theme = useTheme();
  const { data: session } = useSession();

  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    password: false,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0].toLocaleUpperCase()}`,
    };
  }

  if (session && session.user) {
    return (
      <>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar {...stringAvatar(session.user.name)} />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <List sx={{ width: theme.typography.pxToRem(320), p: 2.5 }}>
            <ListItem>
              <Typography
                variant="nm-regular"
                sx={{ color: theme.palette.deBlack.main }}
              >
                {session.user.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="nm-regular" color="deBlack">
                {session.user.email}
              </Typography>
            </ListItem>
            <Divider sx={{ my: 1.2 }} />
            <ListItemButton onClick={() => handleOpenDialog("password")}>
              <ListItemText primary="비밀번호 변경" />
            </ListItemButton>
            <ListItemButton onClick={() => signOut()}>
              <ListItemText primary="로그아웃" />
            </ListItemButton>
          </List>
        </Menu>
        <ChangePasswordDialog
          open={!!dialogs?.password}
          onCancel={() => handleCloseDialog("password")}
        />
      </>
    );
  }

  return (
    <Button variant="outlined" onClick={() => signIn()}>
      LogIn
    </Button>
  );
}

export default SignInButton;
