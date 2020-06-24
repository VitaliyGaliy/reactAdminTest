import * as React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import PropTypes from 'prop-types';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

const MyUrlField = ({ record = {}, source }) => (
  <a href={`http://${record[source]}`} target="_blank">
    {record[source]}
  </a>
);

MyUrlField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.object,
};

export default MyUrlField;
