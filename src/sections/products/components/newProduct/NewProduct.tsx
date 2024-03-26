import { CustomCard1 } from "@/src/components/cards";
import { useDialogs } from "@/src/hooks";
import { useMakeNewProduct } from "@/src/services/products/useProducts";
import uploadService from "@/src/services/uploads/uploadService";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
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

const NewProduct = () => {
  const router = useRouter();
  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    new: false,
  });
  const [image, setImage] = useState<any>([]);
  const fileInput = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      contents: "",
    },
    // Pass the Yup schema to validate the form
    validationSchema: schema,
    // Handle form submission
    onSubmit: async ({ name, contents }) => {
      // Make a request to your backend to store the data
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
    <CustomCard1>
      <Stack
        direction="column"
        spacing={3}
        onClick={() => handleOpenDialog("new")()}
      >
        신규 QA 생성하기
      </Stack>
      <Dialog open={!!dialogs?.new}>
        <DialogTitle>
          {/* <Typography variant="h6">새 QA 프로젝트 생성하기</Typography> */}
        </DialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={2}>
            <TextField
              placeholder="프로젝트명"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
            />
            <TextField
              placeholder="추가 설명"
              name="contents"
              value={values.contents}
              onChange={handleChange}
              id="contents"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDialog("new")()}>취소</Button>
          <Button onClick={() => handleSubmit()}>확인</Button>
        </DialogActions>
      </Dialog>
    </CustomCard1>
  );
};
export default NewProduct;
