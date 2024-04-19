import { CustomCard2 } from "@/src/components/cards/CustomCard2";
import { useMobile } from "@/src/hooks";
import { IQATargetItem } from "@/src/services/products/types";
import { Button, Stack, useTheme } from "@mui/material";
import { useFormikContext } from "formik";
import ContentsTextfield from "./contents/ContentsTextfield";
import { useAddTCItem } from "@/src/services/products/useProducts";

const Contents = ({
  lists,
  img,
  load,
  target,
}: {
  lists: IQATargetItem[];
  img: string;
  load: any;
  target: number;
}) => {
  const theme = useTheme();
  const { isMobile } = useMobile();
  const { values, handleChange } = useFormikContext<IQATargetItem[]>();
  const { mutate: handleAddTcItem } = useAddTCItem({
    onSuccess: () => {
      load();
    },
  });

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      p={theme.typography.pxToRem(20)}
    >
      <CustomCard2>
        <Stack direction="column" spacing={3}>
          {!!lists.length &&
            lists.map((item) => (
              <ContentsTextfield key={`${item.id}`} item={item} load={load} />
            ))}
          <Stack direction="row" width="100%" justifyContent="end">
            <Button
              size="small"
              onClick={() => handleAddTcItem({ id: target })}
            >
              Test Case 추가
            </Button>
          </Stack>
        </Stack>
      </CustomCard2>
      <CustomCard2>
        <img
          alt="img"
          src={`https://dev-detaiez.s3.ap-northeast-2.amazonaws.com/${img}`}
          style={{
            width: "100%",
          }}
        />
      </CustomCard2>
    </Stack>
  );
};

export default Contents;
