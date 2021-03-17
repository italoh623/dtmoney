import { Container } from "./styles";

import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-backgroud">
        <header>
          <p>Entradas</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}