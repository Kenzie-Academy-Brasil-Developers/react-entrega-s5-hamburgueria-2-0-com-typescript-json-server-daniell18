import { Route, Switch } from "react-router";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};
