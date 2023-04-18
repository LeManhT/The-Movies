import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const ToolTipComponent = styled(({ className, ...props }) => {
  return <Tooltip {...props} arrow classes={{ popper: className }} />;
})(({ theme }) => {
  return {
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "black",
      padding: "10px",
      fontWeight: "400",
      fontSize: "14px",
      opacity: "0.8",
    },
  };
});

export default function CustomizedTooltips({ children, toolTipTitle }) {
  return (
    <div>
      <ToolTipComponent title={toolTipTitle}>
        <Button>{children}</Button>
      </ToolTipComponent>
    </div>
  );
}
