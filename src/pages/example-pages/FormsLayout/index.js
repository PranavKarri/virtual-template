import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import FormsLayoutBasic from '../../../components/example-components/FormsLayout/FormsLayoutBasic';
import FormsLayoutGrids from '../../../components/example-components/FormsLayout/FormsLayoutGrids';
export default function FormsLayout() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Layout"
        titleDescription="Build whatever layout you need with our modular user interface framework."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <FormsLayoutBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Grids">
        <FormsLayoutGrids />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
