import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinningImg from "../../assets/grinning.svg";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import listOfMounths from "../../utils/mounths";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth()
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

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
        value: index,
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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains.toFixed(1)),
        color: "#E44C4E",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: "#F7931B",
      },
    ];
    return data;
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMounths
      .map((_, month) => {
        let amountEntry = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount);
            } catch {
              throw new Error(
                "amountEntry is invalid. amountEntry must be valid number"
              );
            }
          }
        });

        let amountOutput = 0;
        expenses.forEach((expense) => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput += Number(expense.amount);
            } catch {
              throw new Error(
                "amountOutput is invalid. amountOutput must be valid number"
              );
            }
          }
        });

        return {
          monthNumber: month,
          month: listOfMounths[month].substr(0, 3),
          amountEntry,
          amountOutput,
        };
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        );
      });
  }, [yearSelected]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que pena!",
        description: "Neste mês você gastou mais do que deveria!",
        footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias",
        icon: sadImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufa!",
        description: "Neste mês você gastou exatamente o que ganhou!",
        footerText: "Tenha cuidado! No próximo mês tente poupar",
        icon: grinningImg,
      };
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim! Considere investir seu saldo.",
        icon: happyImg,
      };
    }
  }, [totalBalance]);

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
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931B"
        />

        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieChartBox data={relationExpensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#f7931b"
          lineColorAmountOutput="#e44c4e"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
