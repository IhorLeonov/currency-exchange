import { FC } from "react";
import { Box, Spinner } from "./Loader.styled";

export const Loader: FC = () => {
  return (
    <Box>
      <Spinner />
    </Box>
  );
};
