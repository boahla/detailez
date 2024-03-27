"use client";
import { CustomCard1 } from "@/src/components/cards";
import {
  useGetProduct,
  useGetProductQAList,
  useGetProductQATarget,
} from "@/src/services/products/useProducts";
import { Card, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CommonLayout from "@/src/layouts/CommonLayout";
import { ProductTCImageLists } from "@/src/components/product";
import Header from "./components/Header";
import { useMobile } from "@/src/hooks";
import Contents from "./components/Contents";

const Complete = ({}) => {
  const { isMobile } = useMobile();
  const { productId } = useParams();
  const [target, setTarget] = useState<number>();
  const [tarIndex, setTarIndex] = useState<number>(0);
  const { data: productDetail } = useGetProduct({
    productId: Number(productId),
  });
  const { data: QAList, isSuccess: isQASuccess } = useGetProductQAList({
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

  return (
    <CommonLayout
      sidebar={
        <ProductTCImageLists lists={QAList} onClickItem={onChangeTarget} />
      }
    >
      <Card elevation={0} sx={{ bgcolor: "transparent" }} key={target}>
        {targetData && (
          <CustomCard1>
            <Header name={productDetail?.name} />
            {!isTargetLoading &&
              !isTargetRefetching &&
              !!targetData &&
              QAList && (
                <Contents
                  lists={targetData.lists}
                  img={QAList[tarIndex]?.path}
                />
              )}
            <Stack direction={isMobile ? "column" : "row"} spacing={1}></Stack>
          </CustomCard1>
        )}
      </Card>
    </CommonLayout>
  );
};

export default Complete;
