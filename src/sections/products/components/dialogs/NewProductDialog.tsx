import { useMakeNewProduct } from "@/src/services/products/useProducts";
import uploadService from "@/src/services/uploads/uploadService";
import { AddPhotoAlternate } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  contents: Yup.string(),
});

const NewProductDialog = ({
  open,
  onCancel,
}: {
  open: boolean;
  onCancel: () => void;
}) => {
  const router = useRouter();
  const [image, setImage] = useState<any>([]);
  const fileInput = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      contents: "",
    },
    validationSchema: schema,
    onSubmit: async ({ name, contents }) => {
      if (!image.length) {
        alert("하나 이상의 이미지를 등록하세요.");
        return;
      }
      onMakeNewProduct();
    },
  });

  async function presignedUpload(file: any, preData: any) {
    try {
      const url = "https://dev-detaiez.s3.ap-northeast-2.amazonaws.com";

      const formData = new FormData();
      const list = Object.keys(preData);
      for (var i = 0; i < list.length; i++) {
        var k = list[i];
        var v = preData[k];
        formData.append(k, v);
      }
      formData.append("file", file);
      return await axios.post(url, formData, {
        onUploadProgress: (progressEvent) => {},
      });
    } catch (error) {
      console.log({ error });
    }
  }

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  const { mutate: onMakeNewProduct } = useMakeNewProduct({
    params: values,
    onSuccess: async (data: any) => {
      if (!!data) {
        const brr = await Promise.all(
          image.map(async (cur: any) => {
            const imgData = await uploadService.getPresignedUrl({
              id: data,
            });
            if (!!imgData && !!imgData.formInput)
              presignedUpload(cur, imgData.formInput);
          })
        );

        router.push(`/product/${data}`);
      }
    },
  });

  const handleImage = async (e: any) => {
    const file = e.target.files;
    if (!file) return;
    setImage((prev: any) => [...prev, ...file]);
  };

  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ px: 4, pt: 4 }}>
        <Typography color="dePurple.1">새 QA 프로젝트 생성하기</Typography>
      </DialogTitle>
      <DialogContent sx={{ px: 4 }}>
        <Stack direction="column" spacing={2}>
          <Stack direction="column" spacing={1}>
            <Typography color="deGray.1">프로젝트명</Typography>
            <TextField
              placeholder="프로젝트명을 입력하세요."
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              fullWidth
              error={!!errors.name}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Typography color="deGray.1">추가 설명</Typography>
            <TextField
              placeholder="추가 설명을 입력하세요. (선택 사항)"
              name="contents"
              value={values.contents}
              onChange={handleChange}
              id="contents"
              fullWidth
              error={!!errors.contents}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Typography color="deGray.1">이미지 업로드</Typography>
            <Stack
              p={3}
              py={5}
              justifyContent="center"
              alignItems="center"
              sx={{ bgcolor: "deGray.4", borderRadius: "10px" }}
              spacing={1.5}
            >
              <AddPhotoAlternate
                sx={{ color: "dePurple.2", width: 40, height: 40 }}
              />
              <input
                type="file"
                name="image_URL"
                id="input-file"
                accept="image/*"
                // style={{ display: "none" }}
                ref={fileInput}
                onChange={handleImage}
                multiple
              />
              <Box>이미지 업로드</Box>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 4, pb: 4 }}>
        <Button
          onClick={onCancel}
          fullWidth
          sx={{
            bgcolor: "#F3F9F5",
            color: "deGreen.2",
            "&:hover": {
              bgcolor: "#F3F9F5",
            },
          }}
        >
          취소
        </Button>
        <Button
          onClick={() => handleSubmit()}
          fullWidth
          sx={{ bgcolor: "deGreen.1", color: "white", ml: "16px !important" }}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default NewProductDialog;
