import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetCurrencyType } from "../helpers/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY;

export const getAllCurrency = createAsyncThunk("main/getAllCurrency", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/latest?api_key=${KEY}`);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrency = createAsyncThunk(
  "main/getCurrency",
  async ({ firstCurrency, secondCurrency }: GetCurrencyType, thunkAPI) => {
    try {
      const res = await axios.get(
        `/latest?api_key=${KEY}&base=${firstCurrency}&symbols=${secondCurrency}`
      );

      return res.data.rates[secondCurrency];
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
