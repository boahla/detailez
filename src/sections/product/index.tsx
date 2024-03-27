"use client";
import { CustomCard1 } from "@/src/components/cards";
import {
  useDeleteTC,
  useGetProduct,
  useGetProductQAList,
  useGetProductQATarget,
} from "@/src/services/products/useProducts";
import { Card, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";
import Contents from "./components/Contents";
import { Formik, FormikHelpers, FormikValues } from "formik";
import Footer from "./components/Footer";
import CommonLayout from "@/src/layouts/CommonLayout";
import { useDialogs } from "@/src/hooks";
import { ProductTCImageLists } from "@/src/components/product";

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
    isRefetching: isTargetRefetching,
  } = useGetProductQATarget({ id: target });
  const { mutate: handleDeleteTC } = useDeleteTC({
    onSuccess: () => loadProductQAList(),
  });

  return (
    <CommonLayout
      sidebar={
        <ProductTCImageLists
          lists={QAList}
          onClickItem={onChangeTarget}
          onDelete={handleDeleteTC}
          load={loadProductQAList}
          isEdit={true}
        />
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
                {!isTargetLoading &&
                  !isTargetRefetching &&
                  !!targetData &&
                  QAList &&
                  target && (
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
