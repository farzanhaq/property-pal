import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Select, Space, Typography } from "antd";
import { useContext } from "react";
import { FormActionKind, PremiumsKind } from "../../../utils/enums";
import { FormContext, FormStatusContext } from "../../../utils/FormState";
import { StyledButtonNavDiv, StyledContentDiv } from "../../Styles/Div.style";
import { StyledScreeningSelector } from "../../Styles/Select.style";
import { StyledPrompt } from "../../Styles/Title.style";

const { Option } = Select;

const Premiums = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>
          I would prefer to have a unit with a...
        </StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <StyledScreeningSelector
          mode="multiple"
          showArrow
          placeholder="Preferred Premiums"
          defaultValue={formState.premiums}
          onChange={(value) =>
            formDispatch({ type: FormActionKind.ADD_PREMIUMS, payload: value })
          }
        >
          <Option value={PremiumsKind.BALCONY}>Balcony</Option>
          <Option value={PremiumsKind.TERRACE}>Terrace</Option>
          <Option value={PremiumsKind.VIEW}>View</Option>
          <Option value={PremiumsKind.HIGH_FLOOR}>High Floor</Option>
        </StyledScreeningSelector>
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

export default Premiums;
