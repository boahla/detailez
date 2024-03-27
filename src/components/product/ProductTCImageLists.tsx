import { useDialogs } from "@/src/hooks";
import { IQAListItem } from "@/src/services/products/types";
import { Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import ImageUploadDialog from "./ImageUploadDialog";
import axios from "axios";
import uploadService from "@/src/services/uploads/uploadService";
import { useParams } from "next/navigation";
import { Close } from "@mui/icons-material";

const ProductTCImageLists = ({
  lists,
  onClickItem,
  load,
  isEdit = false,
  onDelete,
}: {
  lists: IQAListItem[] | undefined;
  onClickItem: (idx: number) => void;
  onDelete?: any;
  load?: any;
  isEdit?: boolean;
}) => {
  const { productId } = useParams();
  const [dialogs, handleOpenDialog, handleCloseDialog] = useDialogs({
    upload: false,
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
    await Promise.all(
      values.map(async (cur: any) => {
        const imgData = await uploadService.getPresignedUrl({
          id: Number(productId),
        });
        if (!!imgData && !!imgData.formInput)
          presignedUpload(cur, imgData.formInput);
      })
    ).then(() => {
      handleCloseDialog("upload")();
      load();
    });
  };

  const onCancel = (id: number) => {
    try {
      if (confirm("삭제하시겠습니까?")) {
        onDelete({ id });
        // handleDeleteTC({ id });
      }
    } catch (error) {
      // errorHandler(error);
    }
  };

  const imageLoader = ({ src }: { src: string }) => {
    return `https://dev-detaiez.s3.ap-northeast-2.amazonaws.com/${src}`;
  };

  return (
    <Stack direction="column" spacing={1} p={1}>
      {isEdit && (
        <Stack>
          <Button onClick={() => handleOpenDialog("upload")()}>
            이미지 업로드
          </Button>
        </Stack>
      )}

      {lists?.map((item: any, idx: any) => (
        <Stack
          onClick={() => onClickItem(idx)}
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

          {!!onDelete && (
            <IconButton
              sx={{ position: "absolute", right: 0 }}
              onClick={() => onCancel(item.id)}
            >
              <Close />
            </IconButton>
          )}
        </Stack>
      ))}
      <ImageUploadDialog
        open={!!dialogs?.upload}
        onClose={() => handleCloseDialog("upload")()}
        onSubmit={onImageUpalod}
      />
    </Stack>
  );
};
export default ProductTCImageLists;
