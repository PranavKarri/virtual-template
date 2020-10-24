import React, { Fragment } from 'react';
import { PageTitle } from '../../../components/layout-components';
import { ExampleWrapperSimple } from '../../../components/layout-components';
import UtilitiesHelpersPrimaryColors from
  '../../../components/example-components/UtilitiesHelpers/UtilitiesHelpersPrimaryColors';
import UtilitiesHelpersNeutralColors from
  '../../../components/example-components/UtilitiesHelpers/UtilitiesHelpersNeutralColors';
import UtilitiesHelpersBrandColors from
  '../../../components/example-components/UtilitiesHelpers/UtilitiesHelpersBrandColors';

export default function UtilitiesHelpers() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Utilities &amp; Helpers"
        titleDescription="These are helpers that speed up the dev time for various components and effects."
      />

      <ExampleWrapperSimple sectionHeading="Brand colors">
        <UtilitiesHelpersBrandColors />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Neutral colors">
        <UtilitiesHelpersNeutralColors />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Primary colors">
        <UtilitiesHelpersPrimaryColors />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
