import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { FormattedMessage } from 'react-intl';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import H1 from 'components/H1';
import { PostList } from './posts';
import { UserList } from './users';
import { PostEdit } from './postEdit';
import { PostCreate } from './postCreate';
import Dashboard from './dashboard';
import messages from './messages';
import authProvider from './authProvider';

export default function NotFound() {
  const dataProvider = jsonServerProvider(
    'https://jsonplaceholder.typicode.com',
  );

  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
        <Admin
          dashboard={Dashboard}
          authProvider={authProvider}
          dataProvider={dataProvider}
        >
          <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
          />
          <Resource name="users" list={UserList} icon={UserIcon} />
        </Admin>
      </H1>
    </article>
  );
}
