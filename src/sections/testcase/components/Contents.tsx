import { CustomCard2 } from "@/src/components/cards/CustomCard2";
import { CustomToggleButton1 } from "@/src/components/toggleButton";
import { useMobile } from "@/src/hooks";
import { IQATargetItem } from "@/src/services/products/types";
import { useAnswerTC } from "@/src/services/products/useProducts";
import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";

const Contents = ({ lists, img }: { lists: IQATargetItem[]; img: string }) => {
  const { isMobile } = useMobile();
  const { productId } = useParams();
  const theme = useTheme();

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
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      p={theme.typography.pxToRem(20)}
    >
      <CustomCard2>
        <Stack direction="column" spacing={3.8}>
          {!!lists.length &&
            lists.map((item, idx) => (
              <Stack direction="column" spacing={2} key={item.id}>
                <Stack direction="row" spacing={1.5}>
                  <Stack
                    width={28}
                    height={28}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      bgcolor: "deGreen.1",
                      borderRadius: "30px",
                      minWidth: "28px",
                      color: "white",
                    }}
                  >
                    {idx + 1}
                  </Stack>
                  <Typography color="deGray.1" sx={{ pt: "1px" }}>
                    {item.contents}
                  </Typography>
                </Stack>

                <Stack sx={{ pl: 4 }}>
                  <CustomToggleButton1
                    id={item.id}
                    onChange={onChangeToggleButton}
                    value={item.status}
                  />
                </Stack>
              </Stack>
            ))}
        </Stack>
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
