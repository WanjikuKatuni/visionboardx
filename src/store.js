// zustand
// state for login and loader

import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  // loader state
  loader: true,
  isLoggedIn: false,
  // toaster
  toasterMsg: "",
  setToaster: (toasterMsg) => set({ toasterMsg }, false, "setToaster"),
  setLoginStatus: (status) =>
    set(
      {
        isLoggedIn: status,
        loader: false,
      },
      false,
      "setLoginStatus"
    ),
});

const useStore = create(devtools(store));

export default useStore;
