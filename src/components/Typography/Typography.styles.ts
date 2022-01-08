import { css, SerializedStyles } from "@emotion/react";
import { h1, h2 } from "../../theme/typography";

export const typography = (variant: string): SerializedStyles => {
  switch (variant) {
    case "h1":
      css({ ...h1 });
      break;
    default:
      css({ ...h2 });
  }
};
