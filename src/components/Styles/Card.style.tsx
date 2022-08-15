import { Card } from "antd";
import styled from "styled-components";

export const StyledScreeningCard = styled(Card)<{ selected?: boolean }>`
  width: 240px;
  margin: 10px;

  .ant-card-body {
    background-color: ${(props) => props.selected === true && "lightblue"};
  }
`;
