// toasteeeeeeeeer

import useStore from "../../store";
import React from "react";
import { Snackbar } from "@mui/material";

export default function ToastbarManager() {
  const {toasterMsg, setToaster} = useStore();
  return (
    <Snackbar
      message={toasterMsg}
      open={!!toasterMsg}
      autoHideDuration={5000}
      onClose={() => setToaster("")}
    />
      
  );
}
