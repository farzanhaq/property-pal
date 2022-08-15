import { Button, Divider, Form, Input, message, Typography } from "antd";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { StyledContentDiv, StyledDiv } from "../../Styles/Div.style";
import { StyledAuthenticationForm } from "../../Styles/Form.style";
import { StyledTitle } from "../../Styles/Title.style";

const { Item } = Form;

const formItemLayout: {
  labelCol: {
    xs: {
      span: number;
    };
    sm: {
      span: number;
    };
  };
  wrapperCol: {
    xs: {
      span: number;
    };
    sm: {
      span: number;
    };
  };
} = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout: {
  wrapperCol: {
    xs: {
      span: number;
      offset: number;
    };
    sm: {
      span: number;
      offset: number;
    };
  };
} = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Verification = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onVerify = async (values: any) => {
    try {
      await Auth.confirmSignUp(values.email, values.code);
      history.push("/login");
    } catch (err) {
      message.error(
        "The verification code you have entered is invalid. Please try again."
      );
      console.log(err);
    }
  };

  return (
    <StyledDiv>
      <Typography>
        <StyledTitle level={2}>Verification</StyledTitle>
      </Typography>
      <Divider />
      <StyledContentDiv>
        <StyledAuthenticationForm
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onVerify}
          scrollToFirstError
        >
          <Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not a valid email!",
              },
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="code"
            label="Verification Code"
            rules={[
              {
                required: true,
                message: "Please enter your verification code",
              },
            ]}
          >
            <Input />
          </Item>
          <Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </Item>
        </StyledAuthenticationForm>
      </StyledContentDiv>
    </StyledDiv>
  );
};

export default Verification;
