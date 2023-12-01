import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainSliceState {
  isLoading: boolean;
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

export interface CurrencyFieldProps {
  currencyList: string[];
  selectedCurrency?: string;
  onChangeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  amount: number | string;
  text: string;
}

export interface UAHCourseProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currency: string;
  course: number | null;
}
