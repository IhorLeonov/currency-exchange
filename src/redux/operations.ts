import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetCurrencyType } from "../helpers/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY;

export const getAllCurrencies = createAsyncThunk("main/getAllCurrencies", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/latest?api_key=${KEY}`);
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

export const getUAHtoUSD = createAsyncThunk("main/getUAHtoUSD", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/latest?api_key=${KEY}&base=USD&symbols=UAH`);

    return res.data.rates["UAH"];
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUAHtoEUR = createAsyncThunk("main/getUAHtoEUR", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/latest?api_key=${KEY}&base=EUR&symbols=UAH`);

    return res.data.rates["UAH"];
  } catch (err) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
});
