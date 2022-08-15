import { Typography } from "antd";
import pp_home_4 from "../../../images/pp-home-4.svg";
import { StyledHomeColImage, StyledHomeColText } from "../../Styles/Col.style";
import { StyledHomeImage } from "../../Styles/Image.style";
import { StyledHomeParagraph } from "../../Styles/Paragraph.style";
import { StyledHomeRow } from "../../Styles/Row.style";
import { StyledHomeTitle } from "../../Styles/Title.style";

const Booking = () => {
  return (
    <StyledHomeRow backgroundColor="grey" align="middle" justify="center">
      <StyledHomeColImage span={12}>
        <StyledHomeImage src={pp_home_4} alt="booking" />
      </StyledHomeColImage>
      <StyledHomeColText span={12}>
        <Typography>
          <StyledHomeTitle level={4}>
            Purchase a property from the comfort of your home
          </StyledHomeTitle>
          <br />
          <StyledHomeParagraph>
            Once you have selected your desired property, simply fill out some
            personal details, provide your consent and choose from our flexible
            payment options.
          </StyledHomeParagraph>
        </Typography>
      </StyledHomeColText>
    </StyledHomeRow>
  );
};

export default Booking;
