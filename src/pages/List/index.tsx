import React from "react";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { Container, Content } from "./styles";

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

      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />

        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 125,50"
        />
      </Content>
    </Container>
  );
};

export default List;
