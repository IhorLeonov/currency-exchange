import { FC } from "react";
import { Box, Currency } from "./UAHCourse.styled";
import { UAHCourseProps } from "../../helpers/types";

export const UAHCourse: FC<UAHCourseProps> = ({ currency, course }) => {
  return (
    <Box>
      <Currency>{currency}</Currency>
      {course && Math.trunc(course * 100) / 100}
    </Box>
  );
};
