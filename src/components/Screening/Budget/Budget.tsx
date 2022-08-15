import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Slider, Space, Typography } from "antd";
import { useContext } from "react";
import { BudgetKind, FormActionKind } from "../../../utils/enums";
import { FormContext, FormStatusContext } from "../../../utils/FormState";
import { StyledButtonNavDiv } from "../../Styles/Div.style";
import { StyledPrompt } from "../../Styles/Title.style";

const marks: {
  [BudgetKind.ZERO]: string;
  [BudgetKind.ONE_MILLION]: string;
  [BudgetKind.TWO_MILLION]: string;
  [BudgetKind.THREE_MILLION]: string;
  [BudgetKind.FOUR_MILLION]: string;
} = {
  [BudgetKind.ZERO]: "$0",
  [BudgetKind.ONE_MILLION]: "$1M",
  [BudgetKind.TWO_MILLION]: "$2M",
  [BudgetKind.THREE_MILLION]: "$3M",
  [BudgetKind.FOUR_MILLION]: "$4M",
};

const Budget = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>My budget is between...</StyledPrompt>
      </Typography>
      <div>
        <Slider
          range
          defaultValue={formState.budget}
          onChange={(value) =>
            formDispatch({ type: FormActionKind.ADD_BUDGET, payload: value })
          }
          max={BudgetKind.FOUR_MILLION}
          step={null}
          marks={marks}
          tipFormatter={(value) =>
            `$${value}`.replace(new RegExp(/\B(?=(\d{3})+(?!\d))/g), ",")
          }
        />
      </div>
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

export default Budget;
