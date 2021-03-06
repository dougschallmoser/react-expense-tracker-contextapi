import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import { formatAmount } from '../utils/format';

function IncomeExpenses(): JSX.Element {

  const { transactions } = useContext(TransactionContext);

  const amounts: number[] = transactions.map(transaction => parseFloat(transaction.amount))
  const income: string = amounts.filter(amount => amount > 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2)
  const expenses: string = amounts.filter(amount => amount < 0).reduce((acc, curr) => (acc + curr), 0).toFixed(2)
  const expensesRev: string = expenses === '0.00' ? expenses : expenses.substring(1)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">${formatAmount(income)}</p>
      </div>
      <div>
        <h4>EXPENSES</h4>
        <p className="money minus">${formatAmount(expensesRev)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses;