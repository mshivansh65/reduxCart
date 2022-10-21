import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notifaication: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notifaication = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});
const uiAction = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
export default uiAction;
