import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import Status from "./Status";
import { Node as NodeType } from "../types/Node";
import { Block as BlockType } from "../types/Block";
import Block from "./Block";
import { checkNodeBlocks } from "../reducers/nodes";
import { useDispatch } from "react-redux";

type Props = {
  node: NodeType;
  expanded: boolean;
  toggleNodeExpanded: (node: NodeType) => void;
};

const AccordionRoot = styled(Accordion)({
  margin: "16px 0",
  boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.15)",

  "&:before": {
    backgroundColor: "unset",
  },
});

const AccordionSummaryContainer = styled(AccordionSummary)({
  padding: "0 24px",
  "& .MuiAccordionSummary-content": {
    margin: "10px 0 !important", // Avoid change of sizing on expanded
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: colors.faded,
  },
});

const AccordionDetailContainer = styled(AccordionDetails)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const BoxSummaryContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingRight: 20,
});

const TypographyHeading = styled(Typography)({
  fontSize: 17,
  display: "block",
  color: colors.text,
  lineHeight: 1.5,
});

const TypographySecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: colors.faded,
  lineHeight: 2,
}));

const Node: React.FC<Props> = ({ node, expanded, toggleNodeExpanded }) => {
  const dispatch = useDispatch();
  const { status, data, loading } = node.blocks || {
    status: false,
    data: [],
    loading: false,
  };

  useEffect(() => {
    expanded && dispatch(checkNodeBlocks(node));
  }, [expanded]);

  return (
    <AccordionRoot
      elevation={3}
      expanded={expanded}
      onChange={() => toggleNodeExpanded(node)}
    >
      <AccordionSummaryContainer expandIcon={<ExpandMoreIcon />}>
        <BoxSummaryContent>
          <Box>
            <TypographyHeading variant="h5">
              {node.name || "Unknown"}
            </TypographyHeading>
            <TypographySecondaryHeading variant="subtitle1">
              {node.url}
            </TypographySecondaryHeading>
          </Box>
          <Status loading={node.loading} online={node.online} />
        </BoxSummaryContent>
      </AccordionSummaryContainer>
      {data && (
        <AccordionDetailContainer>
          {status && data.map((block: BlockType) => <Block Block={block} />)}
          {loading && <CircularProgress />}
          {!status && !loading && (
            <Typography color="error">
              there was an error in the query
            </Typography>
          )}
        </AccordionDetailContainer>
      )}
    </AccordionRoot>
  );
};

export default Node;
