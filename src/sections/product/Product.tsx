"use client";
import { CustomCard1 } from "@/src/components/cards";
import {
  useDeleteTC,
  useGetProduct,
  useGetProductQAList,
  useGetProductQATarget,
} from "@/src/services/products/useProducts";
import { Button, Card, IconButton, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";
import Contents from "./components/Contents";
import { Formik, FormikHelpers, FormikValues } from "formik";
import Footer from "./components/Footer";
import CommonLayout from "@/src/layouts/CommonLayout";
import { useDialogs } from "@/src/hooks";
import ImageUploadDialog from "./components/dialogs/ImageUploadDialog";
import uploadService from "@/src/services/uploads/uploadService";
import axios from "axios";
import Image from "next/image";
import { Close } from "@mui/icons-material";

const Product = ({}) => {
  const { productId } = useParams();
  const [target, setTarget] = useState<number>();
  const [tarIndex, setTarIndex] = useState<number>(0);
  const { data: productDetail } = useGetProduct({
    productId: Number(productId),
  });
  const {
    data: QAList,
    isSuccess: isQASuccess,
    refetch: loadProductQAList,
  } = useGetProductQAList({
    productId: Number(productId),
  });
  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    upload: false,
  });

  const onChangeTarget = useCallback(
    (index: number) => {
      if (!!QAList) {
        setTarget(QAList[index].id);
        setTarIndex(index);
      }
    },
    [QAList]
  );

  useEffect(() => {
    if (isQASuccess) {
      if (!!QAList) onChangeTarget(0);
    }
  }, [QAList, isQASuccess, onChangeTarget]);

  const {
    data: targetData,
    isLoading: isTargetLoading,
    refetch: loadhandleTarget,
  } = useGetProductQATarget({ id: target });
  const { mutate: handleDeleteTC } = useDeleteTC({
    onSuccess: () => loadProductQAList(),
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

  const onImageUpalod = async (values: any) => {
    const brr = await Promise.all(
      values.map(async (cur: any) => {
        const imgData = await uploadService.getPresignedUrl({
          id: Number(productId),
        });
        if (!!imgData && !!imgData.formInput)
          presignedUpload(cur, imgData.formInput);
      })
    );

    handleCloseDialog("upload")();
    loadProductQAList();
  };

  const imageLoader = ({ src }: { src: string }) => {
    return `https://dev-detaiez.s3.ap-northeast-2.amazonaws.com/${src}`;
  };

  const onCancel = (id: number) => {
    try {
      if (confirm("삭제하시겠습니까?")) {
        handleDeleteTC({ id });
      }
    } catch (error) {
      // errorHandler(error);
    }
  };

  return (
    <CommonLayout
      sidebar={
        <Stack direction="column" spacing={1} p={1}>
          <Stack>
            <Button onClick={() => handleOpenDialog("upload")()}>
              이미지 업로드
            </Button>
          </Stack>
          {QAList?.map((item: any, idx: any) => (
            <Stack
              onClick={() => onChangeTarget(idx)}
              key={idx}
              sx={{
                width: "100%",
                height: "140px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                loader={imageLoader}
                src={item.path}
                alt="img"
                layout="responsive"
                objectFit="cover"
                sizes="100vw"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <IconButton
                sx={{ position: "absolute", right: 0 }}
                onClick={() => onCancel(item.id)}
              >
                <Close />
              </IconButton>
            </Stack>
          ))}
          <ImageUploadDialog
            open={!!dialogs?.upload}
            onClose={() => handleCloseDialog("upload")()}
            onSubmit={onImageUpalod}
          />
        </Stack>
      }
    >
      <Card elevation={0} sx={{ bgcolor: "transparent" }} key={target}>
        {targetData && (
          <Formik
            initialValues={targetData.lists}
            onSubmit={function (
              values: FormikValues,
              formikHelpers: FormikHelpers<FormikValues>
            ): void | Promise<any> {
              throw new Error("Function not implemented.");
            }}
          >
            <Stack direction="column" spacing={3} p={3}>
              <CustomCard1>
                <Header name={productDetail?.name} />
                {!isTargetLoading && !!targetData && QAList && target && (
                  <Contents
                    lists={targetData.lists}
                    img={QAList[tarIndex]?.path}
                    target={Number(target)}
                    load={loadhandleTarget}
                  />
                )}
              </CustomCard1>
            </Stack>
          </Formik>
        )}
        <Footer />
      </Card>
    </CommonLayout>
  );
};

export default Product;
