import { PayloadAction, isAnyOf, createSlice } from "@reduxjs/toolkit";
import { getAllCurrencies, getCurrencyCourse, getUAHtoUSD, getUAHtoEUR } from "./operations";
import { MainSliceState } from "../helpers/types";

const initialState = {
  isLoading: false,
  isLoadingHeader: false,
  error: "Qwe",
  data: {
    UAHtoUSDCourse: null,
    UAHtoEURCourse: null,
    ecxchangeCourse: null,
    currencyList: [],
    firstCurrency: "",
    secondCurrency: "",
  },
} as MainSliceState;

const handleSameFulfilled = (state: MainSliceState) => {
  state.isLoading = false;
  state.error = null;
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setFirstCurrency: (state, action: PayloadAction<string>) => {
      state.data.firstCurrency = action.payload;
    },
    setSecondCurrency: (state, action: PayloadAction<string>) => {
      state.data.secondCurrency = action.payload;
    },
    resetError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCurrencies.fulfilled, (state, action) => {
        const { rates, base } = action.payload;
        state.data.currencyList = Object.keys(rates);
        state.data.firstCurrency = base;
        state.data.secondCurrency = "UAH";
        handleSameFulfilled(state);
      })
      .addCase(getCurrencyCourse.fulfilled, (state, action) => {
        state.data.ecxchangeCourse = action.payload;
        handleSameFulfilled(state);
      })
      .addCase(getUAHtoUSD.fulfilled, (state, action) => {
        state.data.UAHtoUSDCourse = action.payload;
        state.isLoadingHeader = false;
        state.error = null;
      })
      .addCase(getUAHtoEUR.fulfilled, (state, action) => {
        state.data.UAHtoEURCourse = action.payload;
        state.isLoadingHeader = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getAllCurrencies.pending, getCurrencyCourse.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getUAHtoUSD.pending, getUAHtoEUR.pending), (state) => {
        state.isLoadingHeader = true;
      })
      .addMatcher(
        isAnyOf(getAllCurrencies.rejected, getCurrencyCourse.rejected),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === "string") state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(getUAHtoUSD.rejected, getUAHtoEUR.rejected), (state, action) => {
        state.isLoadingHeader = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export const { resetError, setFirstCurrency, setSecondCurrency } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
