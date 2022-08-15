import { StyledHomeDiv } from "../Styles/Div.style";
import Booking from "./Booking/Booking";
import Hero from "./Hero/Hero";
import Result from "./Result/Result";
import Results from "./Results/Results";

const Content = () => {
  return (
    <StyledHomeDiv>
      <Hero />
      <Results />
      <Result />
      <Booking />
    </StyledHomeDiv>
  );
};

export default Content;
