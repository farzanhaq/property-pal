import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Button,
  Descriptions,
  Divider,
  message,
  Space,
  Typography
} from "antd";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { createScreening, updateScreening } from "../../../graphql/mutations";
import { listScreenings } from "../../../graphql/queries";
import { BuyerExperienceKind, BuyerPurposeKind } from "../../../utils/enums";
import { FormContext, FormStatusContext } from "../../../utils/FormState";
import {
  StyledButtonNavDiv,
  StyledScreeningConfirmationDiv
} from "../../Styles/Div.style";
import { StyledPrompt } from "../../Styles/Title.style";

const { Item } = Descriptions;

const Confirmation = () => {
  const { formState } = useContext(FormContext);
  const { currentStep, setCurrentStep } = useContext(FormStatusContext);
  const history = useHistory();

  const onFormSubmit = async () => {
    try {
      const {
        attributes: { email },
      }: { attributes: { email: string } } =
        await Auth.currentAuthenticatedUser();

      const filter: {
        user_email: {
          eq: string;
        };
      } = {
        user_email: {
          eq: email,
        },
      };

      const screenings: any = await API.graphql({
        query: listScreenings,
        variables: { filter: filter },
      });

      if (screenings.data.listScreenings.items.length === 0) {
        await API.graphql(
          graphqlOperation(createScreening, {
            input: {
              budget: formState.budget,
              buyer_experience: formState.buyerExperience,
              buyer_purpose: formState.buyerPurpose,
              unit_premium_interest: formState.premiums,
              num_bedrooms: formState.numBedrooms,
              num_bathrooms: formState.numBathrooms,
              user_email: email,
            },
          })
        );
      } else {
        await API.graphql(
          graphqlOperation(updateScreening, {
            input: {
              id: screenings.data.listScreenings.items[0].id,
              budget: formState.budget,
              buyer_experience: formState.buyerExperience,
              buyer_purpose: formState.buyerPurpose,
              unit_premium_interest: formState.premiums,
              num_bedrooms: formState.numBedrooms,
              num_bathrooms: formState.numBathrooms,
              user_email: email,
            },
          })
        );
      }

      history.push("/results");
    } catch (err) {
      message.error(
        "There was an error uploading the screening data. Please try again."
      );
      console.log(err);
    }
  };

  return (
    <>
      <Typography>
        <StyledPrompt level={5}>Please Confirm Your Details...</StyledPrompt>
      </Typography>
      <br />
      <StyledScreeningConfirmationDiv>
        <Descriptions title="Experience">
          <Item>
            {formState.buyerExperience === BuyerExperienceKind.FIRST_TIME
              ? "I am looking to buy my first property"
              : "I have experience purchasing properties"}
          </Item>
        </Descriptions>
        <Divider />
        <Descriptions title="Purpose">
          <Item>
            {formState.buyerPurpose === BuyerPurposeKind.OWNER
              ? "I am looking for a property to live in"
              : "I am looking for an investment property"}
          </Item>
        </Descriptions>
        <Divider />
        <Descriptions title="Bedrooms">
          <Item>{`${
            formState.numBathrooms.length === 0
              ? "Any"
              : formState.numBedrooms.join(", ")
          }`}</Item>
        </Descriptions>
        <Divider />
        <Descriptions title="Bathrooms">
          <Item>{`${
            formState.numBedrooms.length === 0
              ? "Any"
              : formState.numBathrooms.join(", ")
          }`}</Item>
        </Descriptions>
        <Divider />
        <Descriptions title="Premiums">
          <Item>{`${
            formState.premiums.length === 0
              ? "None"
              : formState.premiums.join(", ")
          }`}</Item>
        </Descriptions>
        <Divider />
        <Descriptions title="Budget">
          <Descriptions.Item>
            {formState.budget[0] != null && formState.budget[1] != null
              ? `$${formState.budget[0]
                  .toString()
                  .replace(
                    new RegExp(/\B(?=(\d{3})+(?!\d))/g),
                    ","
                  )} - $${formState.budget[1]
                  .toString()
                  .replace(new RegExp(/\B(?=(\d{3})+(?!\d))/g), ",")}`
              : "I do not have a budget"}
          </Descriptions.Item>
        </Descriptions>
      </StyledScreeningConfirmationDiv>
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
            onClick={onFormSubmit}
            disabled={
              formState.buyerExperience === "" || formState.buyerPurpose === ""
                ? true
                : false
            }
            type="primary"
            shape="circle"
            size="large"
            icon={<RightOutlined />}
            htmlType="submit"
          />
        </Space>
      </StyledButtonNavDiv>
    </>
  );
};

export default Confirmation;
