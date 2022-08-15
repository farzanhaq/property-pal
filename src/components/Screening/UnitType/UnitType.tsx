import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Select, Space, Typography } from "antd";
import { useContext } from "react";
import {
  BathroomsKind, BedroomsKind, FormActionKind
} from "../../../utils/enums";
import { FormContext, FormStatusContext } from "../../../utils/FormState";
import { StyledButtonNavDiv, StyledContentDiv } from "../../Styles/Div.style";
import { StyledScreeningSelector } from "../../Styles/Select.style";
import { StyledPrompt } from "../../Styles/Title.style";

const { Option } = Select;

const UnitType = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>I'm interested in units with...</StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <StyledScreeningSelector
          singular={false}
          mode="multiple"
          showArrow
          placeholder="Number of Bedrooms"
          defaultValue={formState.numBedrooms}
          onChange={(value) =>
            formDispatch({
              type: FormActionKind.ADD_NUM_BEDROOMS,
              payload: value,
            })
          }
        >
          <Option value={BedroomsKind.BACHELOR}>Bachelor</Option>
          <Option value={BedroomsKind.ONE_BED}>One Bedroom</Option>
          <Option value={BedroomsKind.ONE_BED_PLUS_DEN}>
            One Bedroom + Den
          </Option>
          <Option value={BedroomsKind.TWO_BED}>Two Bedrooms</Option>
          <Option value={BedroomsKind.TWO_BED_PLUS_DEN}>
            Two Bedrooms + Den
          </Option>
        </StyledScreeningSelector>
        <StyledScreeningSelector
          mode="multiple"
          showArrow
          placeholder="Number of Bathrooms"
          defaultValue={formState.numBathrooms}
          onChange={(value) =>
            formDispatch({
              type: FormActionKind.ADD_NUM_BATHROOMS,
              payload: value,
            })
          }
        >
          <Option value={BathroomsKind.ONE_BATH}>One Bathroom</Option>
          <Option value={BathroomsKind.TWO_BATH}>Two Bathrooms</Option>
          <Option value={BathroomsKind.THREE_BATH}>Three Bathrooms</Option>
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

export default UnitType;
