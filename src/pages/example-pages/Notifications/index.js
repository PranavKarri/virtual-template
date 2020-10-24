import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { ExampleWrapperSimple } from '../../../components/layout-components';
import NotificationsToasts from '../../../components/example-components/Notifications/NotificationsToasts';
import NotificationsAlertsBasic from '../../../components/example-components/Notifications/NotificationsAlertsBasic';
import NotificationsAlertsDismissible from
  '../../../components/example-components/Notifications/NotificationsAlertsDismissible';

export default function Notifications() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Notifications"
        titleDescription="Show beautiful, animated growl like notifications or alerts on your pages screens."
      />

      <ExampleWrapperSimple sectionHeading="Basic alerts">
        <NotificationsAlertsBasic />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Alerts dismissible">
        <NotificationsAlertsDismissible />
      </ExampleWrapperSimple>

      <ExampleWrapperSimple sectionHeading="Toasts">
        <NotificationsToasts />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
