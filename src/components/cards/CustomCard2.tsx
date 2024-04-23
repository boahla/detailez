"use client";
import { Card, styled } from "@mui/material";

export const CustomCard2 = styled(Card)(({ theme }) => ({
  borderRadius: theme.typography.pxToRem(6),
  padding: theme.typography.pxToRem(24),
  boxShadow: "none",
  width: "100%",
  border: `1px solid rgb(226, 227, 236)`,
}));
