const aws = require("aws-sdk");

const getStripeKey = async () => {
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ["STRIPE_PRIVATE_KEY"].map(
        (secretName) => process.env[secretName]
      ),
      WithDecryption: true,
    })
    .promise();

  return Parameters.pop().Value;
};

exports.handler = async (event) => {
  try {
    const { unit_id, total, success_url, cancel_url } = event.arguments.input;

    const stripePrivateKey = await getStripeKey();
    const stripe = require("stripe")(stripePrivateKey);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            unit_amount: total * 100,
            product_data: {
              name: "Unit Purchase",
            },
          },
          description: `PropertyPal Payment`,
          quantity: 1,
        },
      ],
      mode: "payment",
      client_reference_id: unit_id,
      success_url: success_url,
      cancel_url: cancel_url,
    });

    return session.id;
  } catch (err) {
    throw new Error(err);
  }
};
