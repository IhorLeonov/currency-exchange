import { FC } from "react";
import { Box, Currency } from "./UAHCourse.styled";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface UAHCourseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currency: string;
  course: number | null;
}

export const UAHCourse: FC<UAHCourseProps> = ({ currency, course }) => {
  return (
    <Box>
      <Currency>{currency}</Currency>
      {course && Math.trunc(course * 100) / 100}
    </Box>
  );
};
