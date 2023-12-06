import { PayloadAction, isAnyOf, createSlice } from "@reduxjs/toolkit";
import { getAllCurrencies, getCurrencyCourse, getUAHtoUSD, getUAHtoEUR } from "./operations";
import { MainSliceState } from "../helpers/types";

const initialState = {
  isLoading: false,
  error: null,
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
        const { conversion_rates, base_code } = action.payload;
        state.data.currencyList = Object.keys(conversion_rates);
        state.data.firstCurrency = base_code;
        state.data.secondCurrency = "UAH";
        handleSameFulfilled(state);
      })
      .addCase(getCurrencyCourse.fulfilled, (state, action) => {
        state.data.ecxchangeCourse = action.payload;
        handleSameFulfilled(state);
      })
      .addCase(getUAHtoUSD.fulfilled, (state, action) => {
        state.data.UAHtoUSDCourse = action.payload;
        handleSameFulfilled(state);
      })
      .addCase(getUAHtoEUR.fulfilled, (state, action) => {
        state.data.UAHtoEURCourse = action.payload;
        handleSameFulfilled(state);
      })
      .addMatcher(
        isAnyOf(
          getAllCurrencies.pending,
          getCurrencyCourse.pending,
          getUAHtoUSD.pending,
          getUAHtoEUR.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllCurrencies.rejected,
          getCurrencyCourse.rejected,
          getUAHtoUSD.rejected,
          getUAHtoEUR.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const { resetError, setFirstCurrency, setSecondCurrency } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
