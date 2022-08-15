import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { useContext } from "react";
import pp_purpose_1 from "../../../images/pp-purpose-1.svg";
import pp_purpose_2 from "../../../images/pp-purpose-2.svg";
import { BuyerPurposeKind, FormActionKind } from "../../../utils/enums";
import { FormContext, FormStatusContext } from "../../../utils/FormState";
import { StyledScreeningCard } from "../../Styles/Card.style";
import { StyledButtonNavDiv, StyledContentDiv } from "../../Styles/Div.style";
import { StyledScreeningCardMeta } from "../../Styles/Meta.style";
import { StyledPrompt } from "../../Styles/Title.style";

const BuyerPurpose = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>I'm looking to purchase...</StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <StyledScreeningCard
          selected={
            formState.buyerPurpose === BuyerPurposeKind.OWNER ? true : false
          }
          hoverable
          cover={<img src={pp_purpose_1} alt="owner" />}
          onClick={() => {
            formDispatch({
              type: FormActionKind.ADD_BUYER_PURPOSE,
              payload: BuyerPurposeKind.OWNER,
            });
          }}
        >
          <StyledScreeningCardMeta
            title="A Home"
            description="I plan to live here"
          />
        </StyledScreeningCard>
        <StyledScreeningCard
          selected={
            formState.buyerPurpose === BuyerPurposeKind.INVESTOR ? true : false
          }
          hoverable
          cover={<img src={pp_purpose_2} alt="investor" />}
          onClick={() => {
            formDispatch({
              type: FormActionKind.ADD_BUYER_PURPOSE,
              payload: BuyerPurposeKind.INVESTOR,
            });
          }}
        >
          <StyledScreeningCardMeta
            title="An Investment Property"
            description="I do not plan to live here"
          />
        </StyledScreeningCard>
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
            disabled={formState.buyerPurpose === "" ? true : false}
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

export default BuyerPurpose;
