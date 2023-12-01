import { Box } from "./Converter.styled";
import { FC, useEffect, useState } from "react";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectData } from "../../redux/selectors";
import { getAllCurrencies, getCurrencyCourse } from "../../redux/operations";
import { setFirstCurrency, setSecondCurrency } from "../../redux/mainSlice";

export const Converter: FC = () => {
  const [isFirstOrSecond, setIsFirstOrSecond] = useState<boolean>(true);
  const [amount, setAmount] = useState<string>("1");

  const data = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  const { currencyList, firstCurrency, secondCurrency, ecxchangeCourse } = data;

  let firstAmount: number | string = "";
  let secondAmount: number | string = "";

  if (ecxchangeCourse) {
    if (isFirstOrSecond) {
      firstAmount = amount;
      secondAmount = Number(amount) * ecxchangeCourse;
      if (firstAmount === "") {
        secondAmount = "";
      }
    } else {
      secondAmount = amount;
      firstAmount = Number(amount) / ecxchangeCourse;
      if (secondAmount === "") {
        firstAmount = "";
      }
    }
  }

  useEffect(() => {
    dispatch(getAllCurrencies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (firstCurrency && secondCurrency) {
      dispatch(getCurrencyCourse({ firstCurrency, secondCurrency }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCurrency, secondCurrency]);

  const handleFirstAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setIsFirstOrSecond(true);
  };

  const handleSecondAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setIsFirstOrSecond(false);
  };
  return (
    <Box>
      <CurrencyField
        text="From"
        amount={firstAmount}
        currencyList={currencyList}
        selectedCurrency={firstCurrency}
        onChangeAmount={handleFirstAmount}
        onChangeCurrency={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setFirstCurrency(e.target.value))
        }
      />
      <CurrencyField
        onChangeCurrency={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setSecondCurrency(e.target.value))
        }
        onChangeAmount={handleSecondAmount}
        selectedCurrency={secondCurrency}
        currencyList={currencyList}
        amount={secondAmount}
        text="To"
      />
    </Box>
  );
};
