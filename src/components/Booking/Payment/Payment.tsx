import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { useContext } from "react";
import { BookingStatusContext } from "../../../utils/BookingState";
import { StyledButtonNavDiv, StyledContentDiv } from "../../Styles/Div.style";
import { StyledPrompt } from "../../Styles/Title.style";
import PaymentButton from "./PaymentButton";

interface paymentProps {
  id: string;
  total: string;
}

const Payment = ({ id, total }: paymentProps) => {
  const { currentStep, setCurrentStep } = useContext(BookingStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>Please proceed to payment</StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <PaymentButton id={id} total={total} />
      </StyledContentDiv>
      <br />
      <br />
      <StyledButtonNavDiv>
        <Space>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<LeftOutlined />}
            onClick={() => setCurrentStep(currentStep - 1)}
          />
        </Space>
      </StyledButtonNavDiv>
    </>
  );
};

export default Payment;
