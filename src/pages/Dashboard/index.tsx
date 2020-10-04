import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput/index";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Linds",
      label: "Linds",
    },
    {
      value: "Luiz",
      label: "Luiz",
    },
    {
      value: "Dango",
      label: "Dango",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
