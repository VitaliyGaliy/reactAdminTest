import * as React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from 'react-admin';
import PropTypes from 'prop-types';

const PostTitle = ({ record }) => (
  <span>Post {record ? `"${record.title}"` : ''}</span>
);

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput label="User" source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

PostTitle.propTypes = {
  record: PropTypes.object,
};
