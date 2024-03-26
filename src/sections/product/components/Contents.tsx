import { CustomCard2 } from "@/src/components/cards/CustomCard2";
import { useMobile } from "@/src/hooks";
import { IQATargetItem } from "@/src/services/products/types";
import { Button, Stack } from "@mui/material";
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
  const { isMobile } = useMobile();
  const { values, handleChange } = useFormikContext<IQATargetItem[]>();
  const { mutate: handleAddTcItem } = useAddTCItem({
    onSuccess: () => {
      load();
    },
  });

  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={1}>
      <CustomCard2>
        <Button
          onClick={() => {
            handleAddTcItem({ id: target });
          }}
        >
          TestCase 추가
        </Button>
        {!!lists.length &&
          lists.map((item) => (
            <ContentsTextfield key={item.id} item={item} load={load} />
          ))}
      </CustomCard2>
      <CustomCard2>
        <img
          alt="img"
          src={`https://dev-detaiez.s3.ap-northeast-2.amazonaws.com/${img}`}
        />
      </CustomCard2>
    </Stack>
  );
};

export default Contents;
