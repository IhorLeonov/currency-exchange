import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface HtagProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}
