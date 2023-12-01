import { FC } from "react";
import { Box, Caption, Input, Select } from "./CurrencyField.styled";
import { CurrencyFieldProps } from "../../helpers/types";

export const CurrencyField: FC<CurrencyFieldProps> = ({
  currencyList,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  text,
}) => {
  const formatArray = (arr: string[]) => {
    return Array.from(new Set(arr)).sort();
  };

  return (
    <Box>
      <Caption>{text}:</Caption>
      <Input type="number" min="0" value={amount} onChange={onChangeAmount} />
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyList &&
          formatArray(currencyList).map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
