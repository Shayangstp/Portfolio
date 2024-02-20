import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  darkMode: false,
  offCanvas: false,
  formErrors: {},
};

// export const handleCompaniesList = createAsyncThunk(
//   "main/handleCompaniesList",
//   async (obj, { dispatch, getState }) => {
//     try {
//       const getCompaniesRes = await getCompanies();
//       if (getCompaniesRes.data.companies) {
//         dispatch(RsetCompaniesList(getCompaniesRes.data.companies));
//       } else {
//         console.log("error on companies API");
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   }
// );

const mainSlices = createSlice({
  name: "main",
  initialState,
  reducers: {
    RsetLoading: (state, { payload }) => {
      return { ...state, lodaing: payload };
    },
    RsetDarkMode: (state, { payload }) => {
      return { ...state, darkMode: payload };
    },
    RsetOffCanvas: (state, { payload }) => {
      return { ...state, offCanvas: payload };
    },
    RsetFormErrors: (state, { payload }) => {
      return { ...state, formErrors: payload };
    },
  },
});

export const { RsetDarkMode, RsetLoading, RsetFormErrors, RsetOffCanvas } =
  mainSlices.actions;

export const selectLoading = (state) => state.main.loading;
export const selectDarkMode = (state) => state.main.darkMode;
export const selectFormErrors = (state) => state.main.formErrors;
export const selectOffCanvas = (state) => state.main.offCanvas;

export default mainSlices.reducer;
