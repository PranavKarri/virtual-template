import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import ProgressBarsBasic from '../../../components/example-components/ProgressBars/ProgressBarsBasic';
import ProgressBarsAnimated from '../../../components/example-components/ProgressBars/ProgressBarsAnimated';
import ProgressBarsLabels from '../../../components/example-components/ProgressBars/ProgressBarsLabels';
import ProgressBarsRounded from '../../../components/example-components/ProgressBars/ProgressBarsRounded';
import ProgressBarsColors from '../../../components/example-components/ProgressBars/ProgressBarsColors';
import ProgressBarsMultiple from '../../../components/example-components/ProgressBars/ProgressBarsMultiple';
export default function ProgressBars() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Progress Bars"
        titleDescription="You can use the progress bars on their own or in combination with other widgets."
      />

      <Row>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Basic">
            <ProgressBarsBasic />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Labels">
            <ProgressBarsLabels />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Animated">
            <ProgressBarsAnimated />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Multiple">
            <ProgressBarsMultiple />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Rounded">
            <ProgressBarsRounded />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Colors">
            <ProgressBarsColors />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </Fragment>
  );
}
