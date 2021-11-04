const React = require('react')
const Layout = require('./components/Layout.jsx')

class Index extends React.Component {
    render() {
        const { budgets, bankAccount } = this.props
        return(
            <Layout>
                <h1>BUDGTR</h1>
                <a href="/budgets/new" className="nav-link">Add a new item</a>
                <table>
                    <tr className="legend">
                        <td>DATE</td>
                        <td>NAME</td>
                        <td>FROM</td>
                        <td>AMOUNT ($)</td>
                    </tr>
                    {budgets.map((budget, index) => {
                        return(
                            <tr key={index}>
                                <td className="date"><strong>{budget.date}</strong></td>
                                <td><a href={`/budgets/${index}`}>{budget.name}</a></td>
                                <td>{budget.from}</td>
                                <td className="amount"><strong>{budget.amount}</strong></td>
                            </tr>
                        )
                    })}
                </table>
                <h2 className={ bankAccount > 0 ? 'positive' : 'negative' }>TOTAL: ${bankAccount}</h2>
            </Layout>
        )
    }
}

module.exports = Index