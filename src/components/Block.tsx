import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import { Block as BlockType } from "../types/Block";

type Props = {
  Block: BlockType;
};

const TypographyIndex = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontSize: "10px",
  lineHeight: "16px",
  letterSpacing: "1.5px",
  fontWeight: "700",
  textTransform: "uppercase",
  color: colors.primary,
});

const TypographyData = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: colors.text,
});

const BlockContainer = styled(Box)({
  fontSize: 17,
  display: "block",
  lineHeight: 1.5,
  background: "rgba(0, 0, 0, 0.12)",
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "4px",
  width: "100%",
});

const Block: React.FC<Props> = ({ Block }) => {
  return (
    <BlockContainer sx={{}}>
      <TypographyIndex variant="h5">
        {Block?.id?.padStart(3, "0") || "Unknown"}
      </TypographyIndex>
      <TypographyData variant="h5">
        {Block?.attributes?.data || "Unknown"}
      </TypographyData>
    </BlockContainer>
  );
};

export default Block;
