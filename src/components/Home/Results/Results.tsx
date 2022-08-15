import { Typography } from "antd";
import pphome2 from "../../../images/pp-home-2.svg";
import { StyledHomeColImage, StyledHomeColText } from "../../Styles/Col.style";
import { StyledHomeImage } from "../../Styles/Image.style";
import { StyledHomeParagraph } from "../../Styles/Paragraph.style";
import { StyledHomeRow } from "../../Styles/Row.style";
import { StyledHomeTitle } from "../../Styles/Title.style";

const Results = () => {
  return (
    <StyledHomeRow backgroundColor="grey" align="middle" justify="center">
      <StyledHomeColImage span={12}>
        <StyledHomeImage src={pphome2} alt="results" />
      </StyledHomeColImage>
      <StyledHomeColText span={12}>
        <Typography>
          <StyledHomeTitle level={4}>
            View all of our available properties at a glance
          </StyledHomeTitle>
          <br />
          <StyledHomeParagraph>
            Browse through all of our available listings or filter only the
            properties which interest you. With our Property Finder tool, the
            choice is yours!
          </StyledHomeParagraph>
        </Typography>
      </StyledHomeColText>
    </StyledHomeRow>
  );
};

export default Results;
