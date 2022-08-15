import { Col, Divider, Row, Spin, Steps } from "antd";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookingStatusContext } from "../../utils/BookingState";
import { BookingKind } from "../../utils/enums";
import { StyledDiv } from "../Styles/Div.style";
import { StyledLoadingIcon } from "../Styles/LoadingOutlined.style";
import { StyledSubtitle, StyledTitle } from "../Styles/Title.style";
import Contract from "./Contract/Contract";
import Identification from "./Identification/Identification";
import Payment from "./Payment/Payment";

const { Step } = Steps;

const loadingIcon = <StyledLoadingIcon spin />;

interface bookingProps {
  id: string;
  total: string;
}

const Booking = () => {
  const { currentStep, setCurrentStep } = useContext(BookingStatusContext);
  let unitData = useLocation();
  let formData: JSX.Element;
  const unit: bookingProps = unitData.state as any;

  useEffect(() => {
    return () => {
      setCurrentStep(0);
    };
  }, []);

  switch (currentStep) {
    case BookingKind.IDENTIFICATION:
      formData = <Identification />;
      break;
    case BookingKind.CONTRACT:
      formData = <Contract />;
      break;
    case BookingKind.PAYMENT:
      formData = <Payment id={unit.id} total={unit.total} />;
      break;
    default:
      formData = <Spin indicator={loadingIcon} />;
  }

  return (
    <StyledDiv>
      <StyledTitle level={2}>Booking</StyledTitle>
      <StyledSubtitle level={5} type="secondary">
        Complete your purchase with us
      </StyledSubtitle>
      <Divider />
      <Row align="middle" justify="center">
        <Col span={4}>
          <Steps current={currentStep} direction="vertical">
            <Step title="Identification" />
            <Step title="Legal" />
            <Step title="Payment" />
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

export default Booking;
