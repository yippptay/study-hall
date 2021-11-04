const React = require('react')
const Layout = require('./components/Layout.jsx')

class New extends React.Component {
    render() {
        return(
            <Layout>
                <h1>Add a new item</h1>
                <a href="/budgets" className="nav-link">Go back</a>
                <form action="/budgets" method="POST">
                    {/* date */}
                    <label>
                        date
                        <input type="text" name="date" placeholder="date"/>
                    </label>
                    {/* name */}
                    <label>
                        name
                        <input type="text" name="name" placeholder="name"/>
                    </label>
                    {/* amount */}
                    <label>
                        amount
                        <input type="number" name="amount" placeholder="amount"/>
                    </label>
                    {/* from */}
                    <label>
                        from
                        <input type="text" name="from" placeholder="from"/>
                    </label>
                    {/* submit */}
                    <input type="submit"/>
                </form>
            </Layout>
        )
    }
}

module.exports = New