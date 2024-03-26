import { useCallback, useState } from "react";

const useDialogs = ({
  initialValues,
}: any): [
  dialogs: any,
  handleOpenDialog: (type: string) => (payload?: any) => void,
  handleCloseDialog: (type: string) => (payload?: any) => void
] => {
  const [dialogs, setDialogs] = useState(initialValues);

  const handleOpenDialog = useCallback(
    (type: string) => (payload?: any) => {
      setDialogs((prev: any) => ({ ...prev, [type]: payload || true }));
    },
    []
  );

  const handleCloseDialog = useCallback(
    (type: string) => (payload?: any) => {
      setDialogs((prev: any) => ({ ...prev, [type]: null }));
    },
    []
  );

  return [dialogs, handleOpenDialog, handleCloseDialog];
};

export default useDialogs;
