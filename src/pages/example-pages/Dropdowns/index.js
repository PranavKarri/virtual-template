import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import DropdownsBasic from '../../../components/example-components/Dropdowns/DropdownsBasic';
import DropdownsSplit from '../../../components/example-components/Dropdowns/DropdownsSplit';
export default function Dropdowns() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Dropdowns"
        // eslint-disable-next-line max-len
        titleDescription="A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list."
      />

      <Row>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Basic">
            <DropdownsBasic />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Split">
            <DropdownsSplit />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </Fragment>
  );
}
