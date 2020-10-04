import React, { useMemo, useState, useEffect } from "react";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/fotmatCurrency";
import formatDate from "../../utils/formatDate";

import { Container, Content, Filter } from "./styles";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const { type } = match.params;

  const items = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#f7931b" }
      : { title: "Saídas", lineColor: "#e44c4e" };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const months = [
    {
      value: 1,
      label: "Janeiro",
    },
    {
      value: 5,
      label: "Maio",
    },
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 10,
      label: "Outubro",
    },
  ];

  const years = [
    {
      value: 2018,
      label: 2018,
    },
    {
      value: 2019,
      label: 2019,
    },
    {
      value: 2020,
      label: 2020,
    },
  ];

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedDate = filteredDate.map((item) => {
      return {
        id: String(new Date().getTime()),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: "#4e41f0",
      };
    });

    setData(formattedDate);
  }, [listData, monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title={items.title} lineColor={items.lineColor}>
        <SelectInput
          onChange={(e) => setMonthSelected(e.target.value)}
          options={months}
          defaultValue={monthSelected}
        />
        <SelectInput
          onChange={(e) => setYearSelected(e.target.value)}
          options={years}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filter>
        <button className="tag-filter tag-filter-recurrent">Recorrentes</button>
        <button className="tag-filter tag-filter-eventual">Eventuais</button>
      </Filter>

      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e"}
            title={item.description}
            subtitle={item.dataFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
