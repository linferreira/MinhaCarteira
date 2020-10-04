import React, { useMemo, useState, useEffect } from "react";
import { uuid } from "uuidv4";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/fotmatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMounths from "../../utils/mounths";

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

  const listDate = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const months = useMemo(() => {
    return listOfMounths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listDate.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [listDate]);

  useEffect(() => {
    const filteredDate = listDate.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedDate = filteredDate.map((item) => {
      return {
        id: uuid(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: "#4e41f0",
      };
    });

    setData(formattedDate);
  }, [listDate, monthSelected, yearSelected]);

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
