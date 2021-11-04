const React = require('react')
const Layout = require('./components/Layout.jsx')

class Show extends React.Component {
    render() {
        const { budget } = this.props
        return(
            <Layout>
                <h1>{budget.name}</h1>
                <a href="/budgets" className="nav-link">Go back</a>
                <table>
                    <tr>
                        <td><strong>Date</strong></td>
                        <td>{budget.date}</td>
                    </tr>
                    <tr>
                        <td><strong>From</strong></td>
                        <td>{budget.from}</td>
                    </tr>
                    <tr>
                        <td><strong>Amount</strong></td>
                        <td>{budget.amount}</td>
                    </tr>
                </table>
            </Layout>
        )
    }
}

module.exports = Show