import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import BadgesBasic from '../../../components/example-components/Badges/BadgesBasic';
import BadgesPills from '../../../components/example-components/Badges/BadgesPills';
import BadgesButtons from '../../../components/example-components/Badges/BadgesButtons';
export default function Badges() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Badges"
        titleDescription="Badges and labels are used to offer extra small pieces of info for your content."
      />

      <Row>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Basic">
            <BadgesBasic />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Pills">
            <BadgesPills />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Buttons with label badges">
            <BadgesButtons />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </Fragment>
  );
}
