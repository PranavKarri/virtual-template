import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import TooltipsBasic from '../../../components/example-components/Tooltips/TooltipsBasic';
export default function Tooltips() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Tooltips"
        titleDescription="The tooltip or infotip or a hint is a common graphical user interface element."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <TooltipsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
