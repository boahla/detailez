"use client";
import { Card, styled } from "@mui/material";

export const CustomCard1 = styled(Card)(({ theme }) => ({
  borderRadius: theme.typography.pxToRem(10),
  padding: theme.typography.pxToRem(24),
  boxShadow: "none",
  width: "100%",
}));
