"use client";

import { authenticate } from "@/lib/actions";
import { Button, TextField, Typography } from "@mui/material";
import { useFormState } from "react-dom";

export default function Page() {
  const [errorMsg, dispatch] = useFormState(authenticate, undefined);
  return (
    <div>
      <form action={dispatch} className="flex flex-col">
        <Typography>로그인해 주세요.</Typography>
        <TextField name="email" />
        <TextField name="password" type="password" />
        <Typography>비밀번호 찾기</Typography>
        <Button type="submit" variant="contained">
          로그인
        </Button>
        <Typography>회원가입</Typography>
        <p>{errorMsg}</p>
      </form>
    </div>
  );
}
