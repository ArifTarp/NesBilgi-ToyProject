import React from 'react';
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import CustomerList from '../customers/CustomerList';
import AddOrUpdateCustomer from '../customers/AddOrUpdateCustomer';
import Navi from "../navi/Navi";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={CustomerList} />
        <Route path="/saveCustomer/:customerId" component={AddOrUpdateCustomer} />
        <Route path="/saveCustomer" component={AddOrUpdateCustomer} />
      </Switch>
    </Container>
  );
}

export default App;
