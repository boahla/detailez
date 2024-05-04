"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValue {
  email: string;
  password: string;
}

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    }).then((result) => {
      console.log(result!.error);

      if (result!.error) {
        alert(result?.error);
        return;
      }

      router.push("/products");
    });
  };
  return (
    <div>
      <form
        // action={dispatch}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      >
        <Stack direction="column">
          <Typography variant="nm-regular" sx={{ color: "dePurple.1" }}>
            로그인해 주세요.
          </Typography>
          <TextField
            placeholder="Email"
            {...register("email", {
              required: "이메일을 입력해 주세요.",
            })}
          />
          <TextField
            placeholder="비밀번호"
            type="password"
            {...register("password", {
              required: "비밀번호 입력 해 주세요",
            })}
          />
          <Typography>비밀번호 찾기</Typography>
          <Button type="submit" variant="contained">
            로그인
          </Button>
          <Typography>회원가입</Typography>
        </Stack>

        {/* <p>{errorMsg}</p> */}
      </form>
    </div>
  );
}
