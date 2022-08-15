import { Avatar, Menu, message } from "antd";
import { Auth } from "aws-amplify";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { AuthStatusContext } from "../../utils/AuthState";
import { StyledNavButton } from "../Styles/Button.style";
import { StyledNavLink } from "../Styles/Link.style";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthStatusContext);
  const history = useHistory();

  const onLogOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      history.push("/");
    } catch (err) {
      message.error("There was an error logging out. Please try again.")
      console.log(err);
    }
  };
  
  return (
    <Menu theme="dark" mode="horizontal">
      <Link to={loggedIn ? "/results" : "/"}>
        <Avatar src={logo} size="large" />
      </Link>
      {loggedIn ? (
        <StyledNavButton type="primary" onClick={onLogOut}>
          Log Out
        </StyledNavButton>
      ) : (
        <StyledNavLink to="/login">
          <StyledNavButton type="primary">Log In</StyledNavButton>
        </StyledNavLink>
      )}
    </Menu>
  );
};

export default Navbar;
