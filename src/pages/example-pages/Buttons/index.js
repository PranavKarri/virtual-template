import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import ButtonsBasic from '../../../components/example-components/Buttons/ButtonsBasic';
import ButtonsGroups from '../../../components/example-components/Buttons/ButtonsGroups';
import ButtonsGroupsSizing from '../../../components/example-components/Buttons/ButtonsGroupsSizing';
import ButtonsColors from '../../../components/example-components/Buttons/ButtonsColors';
import ButtonsLinks from '../../../components/example-components/Buttons/ButtonsLinks';
import ButtonsOutline from '../../../components/example-components/Buttons/ButtonsOutline';
import ButtonsSizing from '../../../components/example-components/Buttons/ButtonsSizing';
export default function Buttons() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Buttons"
        // eslint-disable-next-line max-len
        titleDescription="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
      />

      <Row>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Basic">
            <ButtonsBasic />
            <div className="divider my-2" />
            <ButtonsSizing />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Button groups">
            <div className="text-center">
              <ButtonsGroups />
              <div className="divider my-2" />
              <ButtonsGroupsSizing />
            </div>
          </ExampleWrapperSimple>
        </Col>
        <Col xl="12">
          <ExampleWrapperSimple sectionHeading="Colors">
            <ButtonsColors />
          </ExampleWrapperSimple>
        </Col>
      </Row>

      <ExampleWrapperSimple sectionHeading="Links">
        <ButtonsLinks />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Outline">
        <ButtonsOutline />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
