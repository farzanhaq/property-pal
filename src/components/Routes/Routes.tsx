import { Route, Switch } from "react-router-dom";
import {
  Booking, Home,
  Login, Result, Results, Screening, SignUp, Success
} from "../../components";
import Reset from "../Authentication/Reset/Reset";
import Verification from "../Authentication/Verification/Verification";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/verification" component={Verification} />
    <Route exact path="/reset" component={Reset} />
    <Route exact path="/success" component={Success} />
    <PrivateRoute exact path="/screening" component={Screening} />
    <PrivateRoute exact path="/results" component={Results} />
    <PrivateRoute exact path="/result/:id" component={Result} />
    <PrivateRoute exact path="/booking" component={Booking} />
  </Switch>
);

export default Routes;
