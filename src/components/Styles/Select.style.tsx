import { Select } from "antd";
import styled from "styled-components";

export const StyledScreeningSelector = styled(Select)<{ singular?: boolean }>`
  width: 100%;
  margin: ${(props) => (props.singular === false && "0 5px")};
`;
