import { Col, Divider, Row, Spin, Steps, Typography } from "antd";
import { useContext, useEffect } from "react";
import { ScreeningKind } from "../../utils/enums";
import { FormStatusContext } from "../../utils/FormState";
import { StyledDiv } from "../Styles/Div.style";
import { StyledLoadingIcon } from "../Styles/LoadingOutlined.style";
import { StyledSubtitle, StyledTitle } from "../Styles/Title.style";
import Budget from "./Budget/Budget";
import BuyerExperience from "./BuyerExperience/BuyerExperience";
import BuyerPurpose from "./BuyerPurpose/BuyerPurpose";
import Confirmation from "./Confirmation/Confirmation";
import Premiums from "./Premiums/Premiums";
import UnitType from "./UnitType/UnitType";

const { Step } = Steps;

const Screening = () => {
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);
  let formData: JSX.Element;

  useEffect(() => {
    return () => {
      setCurrentStep(0);
    };
  }, []);

  switch (currentStep) {
    case ScreeningKind.BUYER_EXPERIENCE:
      formData = <BuyerExperience />;
      break;
    case ScreeningKind.BUYER_PURPOSE:
      formData = <BuyerPurpose />;
      break;
    case ScreeningKind.UNIT_TYPE:
      formData = <UnitType />;
      break;
    case ScreeningKind.PREMIUMS:
      formData = <Premiums />;
      break;
    case ScreeningKind.BUDGET:
      formData = <Budget />;
      break;
    case ScreeningKind.CONFIRMATION:
      formData = <Confirmation />;
      break;
    default:
      formData = <Spin indicator={<StyledLoadingIcon spin />} />;
  }

  return (
    <StyledDiv>
      <Typography>
        <StyledTitle level={2}>Help Us, Help You</StyledTitle>
        <StyledSubtitle level={5} type="secondary">
          We need you to answer a few questions so we can provide you with some
          recommendations
        </StyledSubtitle>
      </Typography>
      <Divider />
      <Row align="middle" justify="center">
        <Col span={4}>
          <Steps current={currentStep} direction="vertical">
            <Step title="Experience" />
            <Step title="Purpose" />
            <Step title="Unit" />
            <Step title="Premiums" />
            <Step title="Budget" />
            <Step title="Confirmation" />
          </Steps>
        </Col>
        <Col span={18}>
          <Row align="middle" justify="center">
            <Col span={20}>{formData}</Col>
          </Row>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Screening;
