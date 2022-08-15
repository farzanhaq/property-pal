const { v4: uuidv4 } = require("uuid");
const aws = require("aws-sdk");
const documentClient = new aws.DynamoDB.DocumentClient();

/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	AUTH_PROPERTYPAL_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const ORDER_TABLE = "Purchase-cdc3mbpqefc4vd4ogtvmtrcjde-dev";
const ORDER_TYPE = "Order";

const createOrder = async (payload) => {
  const { id, user_email, unit_id } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: id,
      __typename: ORDER_TYPE,
      user_email: user_email,
      unit_id: unit_id,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
  await documentClient.put(params).promise();
};

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

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf.toString();
    },
  })
);
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/webhook", async function (req, res) {
  const stripePrivateKey = await getStripeKey();
  const stripe = require("stripe")(stripePrivateKey);

  const event = req.body.data.object;

  const customer = await stripe.customers.retrieve(event.customer);
  const userEmail = customer.email;
  const paymentIntent = event.id;

  const sessionFromPaymentIntent = await stripe.checkout.sessions.list({
    payment_intent: paymentIntent,
  });

  const checkoutSession = await stripe.checkout.sessions.retrieve(
    sessionFromPaymentIntent.data[0].id
  );

  const unitId = checkoutSession.client_reference_id;

  const payload = {
    id: uuidv4(),
    user_email: userEmail,
    unit_id: unitId,
  };

  await createOrder(payload);

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
