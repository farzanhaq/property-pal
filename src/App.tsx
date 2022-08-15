import { Layout } from "antd";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { Footerbar, Navbar } from "./components";
import Routes from "./components/Routes/Routes";
import { StyledFooter } from "./components/Styles/Footer.style";
import { AuthStatusProvider } from "./utils/AuthState";
import { BookingStatusProvider } from "./utils/BookingState";
import { FormProvider, FormStatusProvider } from "./utils/FormState";

Amplify.configure(config);

const { Header, Content } = Layout;

const App = () => {
  return (
    <AuthStatusProvider>
      <FormProvider>
        <FormStatusProvider>
          <BookingStatusProvider>
            <Layout>
              <Header>
                <Navbar />
              </Header>
              <Content>
                <Routes />
              </Content>
              <StyledFooter>
                <Footerbar />
              </StyledFooter>
            </Layout>
          </BookingStatusProvider>
        </FormStatusProvider>
      </FormProvider>
    </AuthStatusProvider>
  );
};

export default App;
