import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput/index";
import WalletBox from "../../components/WalletBox/index";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import listOfMounths from "../../utils/mounths";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

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

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error("invalid month value. Is accept 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error("invalid year value. Is accept integer numbers.");
    }
  };

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

    [...expenses, ...gains].forEach((item) => {
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
  }, []);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          onChange={(e) => handleMonthSelected(e.target.value)}
          options={months}
          defaultValue={monthSelected}
        />
        <SelectInput
          onChange={(e) => handleYearSelected(e.target.value)}
          options={years}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="saldo"
          amount={150}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4E41F0"
        />

        <WalletBox
          title="entradas"
          amount={5000}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931B"
        />

        <WalletBox
          title="saídas"
          amount={4850}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
