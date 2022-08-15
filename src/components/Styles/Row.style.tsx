import styled from "styled-components";
import { Row } from "antd";

export const StyledHeroRow = styled(Row)`
  padding: 72px;
  min-height: 100vh;
`;

export const StyledHomeRow = styled(Row)<{ backgroundColor?: string }>`
  background-color: ${(props) =>
    props.backgroundColor === "grey" ? "#F5F5F5" : "#FFFFFF"};
  padding: 72px;
`;

export const StyledResultFeesRow = styled(Row)`
  margin-bottom: 16px;
`;
