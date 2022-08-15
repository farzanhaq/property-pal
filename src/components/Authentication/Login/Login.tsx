import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Divider, Form, Input, message, Typography } from "antd";
import { API, Auth } from "aws-amplify";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { listScreenings } from "../../../graphql/queries";
import { AuthStatusContext } from "../../../utils/AuthState";
import { StyledLoginFormButton } from "../../Styles/Button.style";
import { StyledContentDiv, StyledLoginDiv } from "../../Styles/Div.style";
import { StyledAuthenticationForm } from "../../Styles/Form.style";
import { StyledForgotLoginLink } from "../../Styles/Link.style";
import { StyledTitle } from "../../Styles/Title.style";

const { Item } = Form;

const Login = () => {
  const { setLoggedIn } = useContext(AuthStatusContext);
  const history = useHistory();

  const onLogIn = async (values: any) => {
    try {
      await Auth.signIn(values.email, values.password);
      setLoggedIn(true);

      const {
        attributes: { email },
      }: { attributes: { email: string } } =
        await Auth.currentAuthenticatedUser();

      const filter: { user_email: { eq: string } } = {
        user_email: {
          eq: email,
        },
      };

      const screenings: any = await API.graphql({
        query: listScreenings,
        variables: { filter: filter },
      });

      screenings.data.listScreenings.items.length === 0
        ? history.push("/screening")
        : history.push("/results");
    } catch (err) {
      message.error(
        "Your username or password is incorrect. Please try again."
      );
      console.log(err);
    }
  };

  return (
    <>
      <StyledLoginDiv>
        <Typography>
          <StyledTitle level={2}>Log In</StyledTitle>
        </Typography>
        <Divider />
        <StyledContentDiv>
          <StyledAuthenticationForm
            initialValues={{ remember: true }}
            onFinish={onLogIn}
          >
            <Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email address" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Item>
            <Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              <Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember Me</Checkbox>
              </Item>
              <StyledForgotLoginLink to="/reset">
                Forgot Password
              </StyledForgotLoginLink>
            </Item>
            <Item>
              <StyledLoginFormButton type="primary" htmlType="submit">
                Log In
              </StyledLoginFormButton>
              Or <Link to="/signup">Sign Up</Link>
            </Item>
          </StyledAuthenticationForm>
        </StyledContentDiv>
      </StyledLoginDiv>
    </>
  );
};

export default Login;
