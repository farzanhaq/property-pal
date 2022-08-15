import { Typography } from "antd";
import pp_home_3 from "../../../images/pp-home-3.svg";
import { StyledHomeColImage, StyledHomeColText } from "../../Styles/Col.style";
import { StyledHomeImage } from "../../Styles/Image.style";
import { StyledHomeParagraph } from "../../Styles/Paragraph.style";
import { StyledHomeRow } from "../../Styles/Row.style";
import { StyledHomeTitle } from "../../Styles/Title.style";

const Result = () => {
  return (
    <StyledHomeRow align="middle" justify="center">
      <StyledHomeColText span={12}>
        <Typography>
          <StyledHomeTitle level={4}>
            Get detailed information about any of our units
          </StyledHomeTitle>
          <br />
          <StyledHomeParagraph>
            Transparency is our priority. From costs to renderings to
            floorplans, we provide you with all the information you need to make
            an informed decision.
          </StyledHomeParagraph>
        </Typography>
      </StyledHomeColText>
      <StyledHomeColImage span={12}>
        <StyledHomeImage src={pp_home_3} alt="hero" />
      </StyledHomeColImage>
    </StyledHomeRow>
  );
};

export default Result;
