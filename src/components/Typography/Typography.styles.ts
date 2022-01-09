import { css, SerializedStyles } from "@emotion/react";
import { variant } from "./Typography.propTypes";
import { theme } from "../../theme/theme";

export const typography = (variant: variant): SerializedStyles =>
  css(theme.typography[variant]);
