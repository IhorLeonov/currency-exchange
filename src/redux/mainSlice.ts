import { PayloadAction, isAnyOf, createSlice } from "@reduxjs/toolkit";
import { getAllCurrency, getCurrency } from "./operations";
import { MainSliceState } from "../helpers/types";

const initialState = {
  isLoading: false,
  error: "Qwe",
  data: { currencyList: [], ecxchangeRate: null, firstCurrency: "", secondCurrency: "" },
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
      .addCase(getAllCurrency.fulfilled, (state, action) => {
        const { rates, base } = action.payload;
        // const firstName = Object.keys(rates)[0];
        state.data.currencyList = [...Object.keys(rates)];
        state.data.firstCurrency = base;
        // state.data.secondCurrency = firstName;
        state.data.secondCurrency = "UAH";
        handleSameFulfilled(state);
      })
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.data.ecxchangeRate = action.payload;
        handleSameFulfilled(state);
      })
      .addMatcher(isAnyOf(getAllCurrency.pending, getCurrency.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getAllCurrency.rejected, getCurrency.rejected), (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") state.error = action.payload;
      });
  },
});

export const { resetError, setFirstCurrency, setSecondCurrency } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
