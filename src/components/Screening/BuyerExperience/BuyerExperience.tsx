import { RightOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { useContext } from "react";
import pp_experience_1 from "../../../images/pp-experience-1.svg";
import pp_experience_2 from "../../../images/pp-experience-2.svg";
import { BuyerExperienceKind, FormActionKind } from "../../../utils/enums";
import { FormContext, FormStatusContext } from "../../../utils/FormState";
import { StyledScreeningCard } from "../../Styles/Card.style";
import { StyledButtonNavDiv, StyledContentDiv } from "../../Styles/Div.style";
import { StyledScreeningCardMeta } from "../../Styles/Meta.style";
import { StyledPrompt } from "../../Styles/Title.style";

const BuyerExperience = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>I am a...</StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <StyledScreeningCard
          selected={
            formState.buyerExperience === BuyerExperienceKind.FIRST_TIME
              ? true
              : false
          }
          hoverable
          cover={<img src={pp_experience_1} alt="first time buyer" />}
          onClick={() => {
            formDispatch({
              type: FormActionKind.ADD_BUYER_EXPERIENCE,
              payload: BuyerExperienceKind.FIRST_TIME,
            });
          }}
        >
          <StyledScreeningCardMeta
            title="First Time Buyer"
            description="I have never owned a property before"
          />
        </StyledScreeningCard>
        <StyledScreeningCard
          selected={
            formState.buyerExperience === BuyerExperienceKind.EXPERIENCED
              ? true
              : false
          }
          hoverable
          cover={<img src={pp_experience_2} alt="experienced buyer" />}
          onClick={() => {
            formDispatch({
              type: FormActionKind.ADD_BUYER_EXPERIENCE,
              payload: BuyerExperienceKind.EXPERIENCED,
            });
          }}
        >
          <StyledScreeningCardMeta
            title="Experienced Buyer"
            description="I have owned another property"
          />
        </StyledScreeningCard>
      </StyledContentDiv>
      <br />
      <br />
      <StyledButtonNavDiv>
        <Space>
          <Button
            disabled={formState.buyerExperience === "" ? true : false}
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

export default BuyerExperience;
