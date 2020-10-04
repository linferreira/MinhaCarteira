import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput/index";

import { Container } from "./styles";

const List: React.FC = () => {
  const options = [
    {
      value: "Babi  ",
      label: "Babi",
    },
    {
      value: "Yuri",
      label: "Yuri",
    },
    {
      value: "Marco",
      label: "Marco",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Saída" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;
