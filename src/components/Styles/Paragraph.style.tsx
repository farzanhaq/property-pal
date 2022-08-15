import styled from "styled-components";
import { Typography } from "antd";

const { Paragraph } = Typography;

export const StyledHeroParagraph = styled.p`
  font-size: 18px;
`;

export const StyledHomeParagraph = styled.p`
  font-size: 16px;
`;

export const StyledResultParagraph = styled(Paragraph)`
  text-align: center;
`;
