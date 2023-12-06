import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetCurrencyType } from "../helpers/types";

axios.defaults.baseURL = import.meta.env.VITE_API2_URL;
const KEY = import.meta.env.VITE_API2_KEY;

export const getAllCurrencies = createAsyncThunk("main/getAllCurrencies", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/${KEY}/latest/USD`);

    return res.data;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrencyCourse = createAsyncThunk(
  "main/getCurrencyCourse",
  async ({ firstCurrency, secondCurrency }: GetCurrencyType, thunkAPI) => {
    try {
      const res = await axios.get(`/${KEY}/pair/${firstCurrency}/${secondCurrency}`);

      return res.data.conversion_rate;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUAHtoUSD = createAsyncThunk("main/getUAHtoUSD", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/${KEY}/pair/USD/UAH`);

    return res.data.conversion_rate;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUAHtoEUR = createAsyncThunk("main/getUAHtoEUR", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/${KEY}/pair/EUR/UAH`);
    return res.data.conversion_rate;
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});
