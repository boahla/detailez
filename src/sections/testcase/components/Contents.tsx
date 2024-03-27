import { CustomCard2 } from "@/src/components/cards/CustomCard2";
import { CustomToggleButton1 } from "@/src/components/toggleButton";
import { useMobile } from "@/src/hooks";
import { IQATargetItem } from "@/src/services/products/types";
import { useAnswerTC } from "@/src/services/products/useProducts";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";

const Contents = ({ lists, img }: { lists: IQATargetItem[]; img: string }) => {
  const { isMobile } = useMobile();
  const { productId } = useParams();

  const { mutate: onClickAnswer } = useAnswerTC({});

  const onChangeToggleButton = ({
    tc,
    status,
  }: {
    tc: number;
    status: "pass" | "cancel" | "hold" | "error";
  }) => {
    const params = {
      id: Number(productId),
      contents: { tc, status },
    };
    onClickAnswer(params);
  };

  const imageLoader = ({ src }: { src: string }) => {
    return `https://dev-detaiez.s3.ap-northeast-2.amazonaws.com/${src}`;
  };

  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={1}>
      <CustomCard2>
        {!!lists.length &&
          lists.map((item) => (
            <Stack direction="column" spacing={1} key={item.id}>
              {item.contents}
              <CustomToggleButton1
                id={item.id}
                onChange={onChangeToggleButton}
                value={item.status}
              />
            </Stack>
          ))}
      </CustomCard2>
      <CustomCard2>
        <Image
          loader={imageLoader}
          src={img}
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
      </CustomCard2>
    </Stack>
  );
};

export default Contents;
