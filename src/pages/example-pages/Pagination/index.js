import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import PaginationBasic from '../../../components/example-components/Pagination/PaginationBasic';
import PaginationSizing from '../../../components/example-components/Pagination/PaginationSizing';
export default function Pagination() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Pagination"
        titleDescription="Basic and dynamic pagination for use in your next awesome application."
      />

      <Row>
        <Col lg="6">
          <ExampleWrapperSimple sectionHeading="Basic">
            <PaginationBasic />
          </ExampleWrapperSimple>
        </Col>
        <Col lg="6">
          <ExampleWrapperSimple sectionHeading="Sizing">
            <PaginationSizing />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </Fragment>
  );
}
