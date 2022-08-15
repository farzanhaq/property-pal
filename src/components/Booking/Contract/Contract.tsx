import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Image, Space, Typography } from "antd";
import { useContext } from "react";
import agreement from "../../../images/agreement.jpeg";
import { BookingStatusContext } from "../../../utils/BookingState";
import { StyledButtonNavDiv, StyledContentDiv } from "../../Styles/Div.style";
import { StyledPrompt } from "../../Styles/Title.style";

const Contract = () => {
  const { currentStep, setCurrentStep } = useContext(BookingStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>Please review the agreement</StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <Image width={200} src={agreement} />
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
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<RightOutlined />}
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
          />
        </Space>
      </StyledButtonNavDiv>
    </>
  );
};

export default Contract;
