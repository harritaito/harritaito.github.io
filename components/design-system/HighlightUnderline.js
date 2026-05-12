import React from "react";
import { colors } from "./tokens";

const HighlightUnderline = () => (
  <div
    aria-hidden="true"
    style={{
      display: "block",
      height: 8,
      width: "98%",
      background: colors.markerHighlight,
      marginTop: -9,
      marginLeft: 2,
    }}
  />
);

export default HighlightUnderline;
