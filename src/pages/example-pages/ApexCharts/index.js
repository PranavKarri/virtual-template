import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import ApexChartsLine from '../../../components/example-components/ApexCharts/ApexChartsLine';
import ApexChartsArea from '../../../components/example-components/ApexCharts/ApexChartsArea';
import ApexChartsColumn from '../../../components/example-components/ApexCharts/ApexChartsColumn';
import ApexChartsBar from '../../../components/example-components/ApexCharts/ApexChartsBar';
import ApexChartsMixed from '../../../components/example-components/ApexCharts/ApexChartsMixed';
import ApexChartsHeatmap from '../../../components/example-components/ApexCharts/ApexChartsHeatmap';
import ApexChartsRadialbar from '../../../components/example-components/ApexCharts/ApexChartsRadialbar';
import ApexChartsRadar from '../../../components/example-components/ApexCharts/ApexChartsRadar';
export default function ApexCharts() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Apex Charts"
        titleDescription="Wonderful animated charts built with ApexCharts components."
      />

      <Row>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Area">
            <ApexChartsArea />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Column">
            <ApexChartsColumn />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Line">
            <ApexChartsLine />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radar">
            <ApexChartsRadar />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="6">
          <ExampleWrapperSimple sectionHeading="Bar">
            <ApexChartsBar />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Heatmap">
            <ApexChartsHeatmap />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Mixed">
            <ApexChartsMixed />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple sectionHeading="Radial bar">
            <ApexChartsRadialbar />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </Fragment>
  );
}
