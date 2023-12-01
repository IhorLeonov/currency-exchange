export interface MainSliceState {
  isLoading: boolean;
  isLoadingHeader: boolean;
  error: string | null;
  data: {
    UAHtoUSDCourse: number | null;
    UAHtoEURCourse: number | null;
    currencyList: string[];
    ecxchangeCourse: number | null;
    firstCurrency: string;
    secondCurrency: string;
  };
}

export interface GetCurrencyType {
  firstCurrency: string;
  secondCurrency: string;
}
