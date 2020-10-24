import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import CarouselsBasic from '../../../components/example-components/Carousels/CarouselsBasic';
export default function Carousels() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Carousels"
        titleDescription="Create easy, simple to use and beautiful slideshows &amp; carousels with these components."
      />

      <ExampleWrapperSimple sectionHeading="Basic carousel">
        <CarouselsBasic />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
