import { useCallback, useState } from "react";

const useDialogs = ({
  initialValues,
}: any): [
  dialogs: any,
  handleOpenDialog: (type: string) => void,
  handleCloseDialog: (type: string) => void
] => {
  const [dialogs, setDialogs] = useState(initialValues);

  const handleOpenDialog = useCallback((type: string) => {
    setDialogs((prev: any) => ({ ...prev, [type]: true }));
  }, []);

  const handleCloseDialog = useCallback((type: string) => {
    setDialogs((prev: any) => ({ ...prev, [type]: false }));
  }, []);

  return [dialogs, handleOpenDialog, handleCloseDialog];
};

export default useDialogs;
