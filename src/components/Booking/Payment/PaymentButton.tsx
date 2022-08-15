import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button, message } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { processPayment } from "../../../graphql/mutations";
import { StyledCheckoutText } from "../../Styles/Text.style";

const STRIPE_PUBLIC_KEY: string =
  "pk_test_51K6Lv8JfUhuzTQLsnTrk8sZTeap3i5f9QUCq8UlN4Rk0LRc77GbxppRAAqW5yl6RimUU1DSEymcAw4ioHnyAoCI000QFZV7fIs";

interface paymentButtonProps {
  id: string;
  total: string;
}

const PaymentButton = ({ id, total }: paymentButtonProps) => {
  const handlePay = async () => {
    const payload = {
      unit_id: id,
      total: total.replace(/,/g, ""),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000",
    };

    const response: any = await API.graphql(
      graphqlOperation(processPayment, { input: payload })
    );

    const stripePromise = await loadStripe(STRIPE_PUBLIC_KEY);

    stripePromise
      ?.redirectToCheckout({
        sessionId: response.data.processPayment,
      })
      .then(function (result: any) {
        message.error(result.error.message);
      });
  };

  return (
    <Elements stripe={loadStripe(STRIPE_PUBLIC_KEY)}>
      <Button size="large" type="primary" onClick={handlePay}>
        Checkout with
        <StyledCheckoutText strong italic>
          Stripe
        </StyledCheckoutText>
      </Button>
    </Elements>
  );
};

export default PaymentButton;
