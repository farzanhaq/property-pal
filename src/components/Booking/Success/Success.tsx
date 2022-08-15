import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { StyledDiv } from "../../Styles/Div.style";

const Success = () => {
  return (
    <StyledDiv>
      <Result
        status="success"
        title="Purchase Successful"
        subTitle="You will recieve an email confirmation shortly"
        extra={[
          <Link to="/results">
            <Button type="primary">Go Home</Button>
          </Link>,
          <Link to="/results">
            <Button>View More Properties</Button>,
          </Link>,
        ]}
      />
    </StyledDiv>
  );
};

export default Success;
