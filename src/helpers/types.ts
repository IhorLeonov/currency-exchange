export interface MainSliceState {
  isLoading: boolean;
  error: string | null;
  data: {
    currencyList: string[];
    ecxchangeRate: number | null;
    firstCurrency: string;
    secondCurrency: string;
  };
}

export interface GetCurrencyType {
  firstCurrency: string;
  secondCurrency: string;
}
