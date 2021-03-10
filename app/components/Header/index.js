import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      {!window.location.pathname.includes('admin') && (
        <A href="https://www.reactboilerplate.com/">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
      )}
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/admin">
          <FormattedMessage {...messages.admin} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;