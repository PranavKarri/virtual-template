import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import ModalsBasic from '../../../components/example-components/Modals/ModalsBasic';
export default function Modals() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Modal dialogs"
        titleDescription="Wide selection of modal dialogs styles and animations available."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <ModalsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
