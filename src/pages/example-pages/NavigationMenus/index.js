import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import NavigationMenusHorizontal from
  '../../../components/example-components/NavigationMenus/NavigationMenusHorizontal';
import NavigationMenusVerticalBasic from
  '../../../components/example-components/NavigationMenus/NavigationMenusVerticalBasic';

export default function NavigationMenus() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Navigation menus"
        titleDescription="Navigation menus are one of the basic building blocks for any web or mobile app."
      />

      <ExampleWrapperSimple sectionHeading="Vertical menus">
        <NavigationMenusVerticalBasic />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Horizontal menus">
        <NavigationMenusHorizontal />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
