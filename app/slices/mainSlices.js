import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  darkMode: false,
  offCanvas: false,
  formErrors: {},
  //email
  userName: "",
  userEmail: "",
  userSubject: "",
  userMessage: "",
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
export const handleContactReset = createAsyncThunk(
  "main/handleContactReset",
  async (obj, { dispatch, getState }) => {
    dispatch(RsetUserName(""));
    dispatch(RsetUserEmail(""));
    dispatch(RsetUserSubject(""));
    dispatch(RsetUserMessage(""));
    dispatch(RsetFormErrors({}));
  }
);

const mainSlices = createSlice({
  name: "main",
  initialState,
  reducers: {
    RsetLoading: (state, { payload }) => {
      return { ...state, loading: payload };
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
    //email
    RsetUserName: (state, { payload }) => {
      return { ...state, userName: payload };
    },
    RsetUserEmail: (state, { payload }) => {
      return { ...state, userEmail: payload };
    },
    RsetUserSubject: (state, { payload }) => {
      return { ...state, userSubject: payload };
    },
    RsetUserMessage: (state, { payload }) => {
      return { ...state, userMessage: payload };
    },
  },
});

export const {
  RsetLoading,
  RsetDarkMode,
  RsetOffCanvas,
  RsetFormErrors,
  RsetUserName,
  RsetUserEmail,
  RsetUserSubject,
  RsetUserMessage,
} = mainSlices.actions;

export const selectLoading = (state) => state.main.loading;
export const selectDarkMode = (state) => state.main.darkMode;
export const selectFormErrors = (state) => state.main.formErrors;
export const selectOffCanvas = (state) => state.main.offCanvas;

//email
export const selectUserName = (state) => state.main.userName;
export const selectUserEmail = (state) => state.main.userEmail;
export const selectUserSubject = (state) => state.main.userSubject;
export const selectUserMessage = (state) => state.main.userMessage;

export default mainSlices.reducer;
