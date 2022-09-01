import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import { Block as BlockType } from "../types/Block";

type Props = {
  block: BlockType;
};

const TypographyHeading = styled(Typography)({
  fontSize: 10,
  display: "block",
  color: colors.primary,
  lineHeight: "16px",
  fontWeight: 700,
  letterSpacing: "1.5px",
});

const TypographySecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: colors.text,
  lineHeight: 2,
}));

const BlockContainer = styled(Typography)(({ theme }) => ({
  background: colors.faded,
  borderRadius: "2px",
  padding: 8,
  marginBottom: 4,
}));

const Block: React.FC<Props> = ({ block }) => {
  return (
    <BlockContainer>
      <TypographyHeading variant="h5">
        {block.id.padStart(3, "0") || ""}
      </TypographyHeading>
      <TypographySecondaryHeading variant="subtitle1">
        {block?.attributes?.data || ""}
      </TypographySecondaryHeading>
    </BlockContainer>
  );
};

export default Block;
