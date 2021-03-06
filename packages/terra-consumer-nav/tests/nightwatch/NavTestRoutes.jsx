/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavTests from './NavTests';

// Test Cases
import BurgerButtonTest from './BurgerButtonTest';
import HelpButtonTest from './HelpButtonTest';
import SimpleNav from './SimpleNav';
import ProfilePopUpCountTester from './ProfilePopUpCountTester';
import NavLogoTest from './NavLogoTest';
import SimpleNavWithTextLogo from './SimpleNavWithTextLogo';
import SafeHtmlTest from './SafeHtmlTest';

const routes = (
  <div>
    <Route path="/tests/nav-tests" component={NavTests} />
    <Route path="/tests/nav-tests/burger-button" component={BurgerButtonTest} />
    <Route path="/tests/nav-tests/help-button" component={HelpButtonTest} />
    <Route path="/tests/nav-tests/simple-nav" component={SimpleNav} />
    <Route path="/tests/nav-tests/profile-pop-up-count-tester" component={ProfilePopUpCountTester} />
    <Route path="/tests/nav-tests/simple-nav-logo-text" component={SimpleNavWithTextLogo} />
    <Route path="/tests/nav-tests/logo" component={NavLogoTest} />
    <Route path="/tests/nav-tests/safe-html" component={SafeHtmlTest} />
  </div>
);

export default routes;
