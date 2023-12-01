import { HtagProps } from "./Htag.props";
import { H1, H2 } from "./Htag.styled";

export const Htag = ({ tag, children, ...props }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <H1 {...props}>{children}</H1>;
    case "h2":
      return <H2 {...props}>{children}</H2>;
    default:
      return <></>;
  }
};
