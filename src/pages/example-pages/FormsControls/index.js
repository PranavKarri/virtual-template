import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';
import { ExampleWrapperSeamless } from '../../../components/layout-components';

import FormsControlsBasic from '../../../components/example-components/FormsControls/FormsControlsBasic';
import FormsControlsInputGroups from '../../../components/example-components/FormsControls/FormsControlsInputGroups';
export default function FormsControls() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Controls"
        titleDescription="Wide selection of forms controls, using a standardised code base, specifically for React."
      />
      <ExampleWrapperSeamless sectionHeading="Basic">
        <FormsControlsBasic />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Input groups">
        <FormsControlsInputGroups />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
