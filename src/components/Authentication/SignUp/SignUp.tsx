import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  message,
  Select,
  Typography
} from "antd";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { StyledContentDiv, StyledDiv } from "../../Styles/Div.style";
import { StyledAuthenticationForm } from "../../Styles/Form.style";
import { StyledTitle } from "../../Styles/Title.style";

const { Option } = Select;
const { Item } = Form;
const { Password } = Input;

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

const SignUp = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onSignUp = async (values: any) => {
    try {
      await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          given_name: values.givenName,
          family_name: values.familyName,
          gender: values.gender,
          phone_number: ["+", values.prefix, values.phoneNumber].join(""),
        },
      });
      history.push("/verification");
    } catch (err) {
      message.error("There was an error signing up. Please try again.");
      console.log(err);
    }
  };

  const prefixSelector = (
    <Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
      </Select>
    </Item>
  );

  return (
    <StyledDiv>
      <Typography>
        <StyledTitle level={2}>Sign Up</StyledTitle>
      </Typography>
      <Divider />
      <StyledContentDiv>
        <StyledAuthenticationForm
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onSignUp}
          initialValues={{
            prefix: "1",
          }}
          scrollToFirstError
        >
          <Item
            name="givenName"
            label="Given Name"
            rules={[
              {
                required: true,
                message: "Please enter your given name",
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="familyName"
            label="Family Name"
            rules={[
              {
                required: true,
                message: "Please enter your family name",
              },
            ]}
          >
            <Input />
          </Item>
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
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
            hasFeedback
          >
            <Password />
          </Item>
          <Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords you have entered do not match")
                  );
                },
              }),
            ]}
          >
            <Password />
          </Item>
          <Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    (getFieldValue("phoneNumber").length === 10 &&
                      !isNaN(getFieldValue("phoneNumber")) &&
                      !isNaN(parseFloat(getFieldValue("phoneNumber"))))
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The phone number you have entered is invalid")
                  );
                },
              }),
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Item>
          <Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select your gender" }]}
          >
            <Select placeholder="Select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Item>
          <Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Please accept the agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          </Item>
          <Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Item>
        </StyledAuthenticationForm>
      </StyledContentDiv>
    </StyledDiv>
  );
};

export default SignUp;
