import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import MapsGoogleMaps from '../../../components/example-components/Maps/MapsGoogleMaps';
import MapsLeafletMaps from '../../../components/example-components/Maps/MapsLeafletMaps';
export default function Maps() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Maps"
        titleDescription="Implement in your applications Google or vector maps."
      />
      <ExampleWrapperSimple sectionHeading="Google maps">
        <MapsGoogleMaps />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Leaflet maps">
        <MapsLeafletMaps />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
