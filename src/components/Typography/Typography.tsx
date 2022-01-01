import { FC } from "react";
import { TypographyProps } from "./Typography.propTypes";
import { typography } from "./Typography.styles";

export const Typography: FC<TypographyProps> = ({ children }) => {
  return <div css={typography}>{children}</div>;
};
