import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table, Input } from "reactstrap";
import { bindActionCreators } from "redux";
import * as customerActions from "../../redux/actions/customerActions";
import { Link } from "react-router-dom";
import { DataTable } from 'react-data-components';

class CustomerList extends Component {
  componentDidMount() {
    this.props.actions.getCustomers();
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.props.actions.getCustomers(value);
  };
  edit =
    (val, row) =>
<Link to={"/saveCustomer/" + row['customerId']}>Edit</Link>
  tableColumns = [
    { title: 'Id', prop: 'id' },
    { title: 'First Name', prop: 'first_Name' },
    { title: 'Last Name', prop: 'last_Name' },
    { title: 'EMail', prop: 'eMail' },
    { title: 'Gender', prop: 'gender' },
    { title: 'Phone', prop: 'phone' },
    { title: 'Edit', render: this.edit, className: 'text-center' },
  ];
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Customers</Badge>
        </h3>
        <DataTable
      className="container"
      keys="id"
      columns={this.tableColumns}
      initialData={this.props.customers}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customerListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCustomers: bindActionCreators(customerActions.getCustomers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
