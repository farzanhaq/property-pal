import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import pp_home_1 from "../../../images/pp-home-1.svg";
import { StyledHomeColImage, StyledHomeColText } from "../../Styles/Col.style";
import { StyledHomeImage } from "../../Styles/Image.style";
import { StyledHeroParagraph } from "../../Styles/Paragraph.style";
import { StyledHeroRow } from "../../Styles/Row.style";

const { Title, Text } = Typography;

const Hero = () => {
  return (
    <StyledHeroRow align="middle" justify="center">
      <StyledHomeColText span={12}>
        <Typography>
          <Title>
            Purchasing properties <span>&#8212;</span>{" "}
            <Text italic>made easy.</Text>
          </Title>
          <br />
          <StyledHeroParagraph>
            The traditional process of buying and selling real estate is known
            to be confusing, slow and cumbersome - but that doesn't need to be
            the case.
            <br />
            <br />
            With <Text strong>PropertyPal</Text>, we take out the guesswork, and
            provide you with a streamlined way to{" "}
            <Text mark> view, manage and purchase real estate. </Text>
          </StyledHeroParagraph>
        </Typography>
        <br />
        <Space>
          <Link to="/login">
            <Button type="primary" size="large">
              Get Started
            </Button>
          </Link>
          <ScrollLink to="home-results" smooth={true} duration={1000}>
            <Button size="large">Learn More</Button>
          </ScrollLink>
        </Space>
      </StyledHomeColText>
      <StyledHomeColImage span={12}>
        <StyledHomeImage src={pp_home_1} alt="hero" />
      </StyledHomeColImage>
    </StyledHeroRow>
  );
};

export default Hero;
