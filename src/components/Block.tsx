import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import { Block as BlockType } from "../types/Block";

type Props = {
  block: BlockType;
};

const TypographyHeading = styled(Typography)({
  fontSize: 10,
  lineHeight: "16px",
  color: colors.primary,
  letterSpacing: "1.5px",
});

const TypographySecondaryHeading = styled(Typography)({
  fontSize: 14,
  color: colors.text,
  lineHeight: 2,
  textTransform: "capitalize",
});

const BlockContainer = styled(Box)(({ theme }) => ({
  background: colors.faded,
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "4px",
}));

const Block: React.FC<Props> = ({ block }) => {
  return (
    <BlockContainer>
      <TypographyHeading sx={{ fontWeight: 700 }}>
        {block.id.padStart(3, "0") || "Unknown"}
      </TypographyHeading>
      <TypographySecondaryHeading variant="subtitle1">
        {block.attributes.data}
      </TypographySecondaryHeading>
    </BlockContainer>
  );
};

export default Block;
