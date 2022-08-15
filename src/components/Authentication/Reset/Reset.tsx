import { LockOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message, Typography } from "antd";
import { Auth } from "aws-amplify";
import { useState } from "react";
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

const Reset = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onReset = async (values: any) => {
    if (isEmailSent) {
      try {
        await Auth.forgotPasswordSubmit(email, values.code, values.password);
        history.push("/login");
      } catch (err) {
        message.error(
          "The verification code you have entered is incorrect. Please try again."
        );
        console.log(err);
      }
    } else {
      try {
        await Auth.forgotPassword(values.email);
        message.info("Please find the verification code sent to your email.");
        setEmail(values.email);
        setIsEmailSent(true);
      } catch (err) {
        message.error(
          "There was an error sending the verification code to your email. Please try again."
        );
        console.log(err);
      }
    }
  };

  return (
    <StyledDiv>
      <Typography>
        <StyledTitle level={2}>Reset Password</StyledTitle>
      </Typography>
      <Divider />
      <StyledContentDiv>
        {isEmailSent ? (
          <StyledAuthenticationForm
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onReset}
            scrollToFirstError
          >
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
            <Item
              name="password"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "Please enter your new password",
                },
              ]}
            >
              <Input prefix={<LockOutlined />} type="password" />
            </Item>
            <Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Confirm
              </Button>
            </Item>
          </StyledAuthenticationForm>
        ) : (
          <StyledAuthenticationForm
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onReset}
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
            <Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Confirm
              </Button>
            </Item>
          </StyledAuthenticationForm>
        )}
      </StyledContentDiv>
    </StyledDiv>
  );
};

export default Reset;
