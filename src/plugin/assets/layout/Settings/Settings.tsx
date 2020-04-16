import React from "react";

import { Card } from "../../../../components/Card";
import { Content } from "../../../../components/Content";
import { Select, Option } from "../../../../components/Select";

export const Settings = () => {
  return (
    <Card title="Settings" toggle initialOpen={true}>
      <Content spacing="large">
        Order navigation by:
        <Select>
          <Option>Eddy</Option>
          <Option>Sims</Option>
        </Select>
      </Content>
      <Content spacing="large">Order cards by: select</Content>
      <Content spacing="large">Permission access level: select</Content>
    </Card>
  );
};
