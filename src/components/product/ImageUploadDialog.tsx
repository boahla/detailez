import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useRef, useState } from "react";

const ImageUploadDialog = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (value: any) => void;
}) => {
  const [image, setImage] = useState<any[]>([]);
  const fileInput = useRef(null);
  const handleImage = async (e: any) => {
    const file = e.target.files;
    console.log({ file });
    if (!file) return;

    setImage((prev: any) => [...prev, ...file]);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
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
        <Button
          onClick={() => {
            onSubmit(image);
          }}
        >
          업로드
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default ImageUploadDialog;
