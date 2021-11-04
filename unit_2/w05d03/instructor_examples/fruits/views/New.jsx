const React = require('react');
const { Component } = React;
const Layout = require('./components/Layout.jsx');

class New extends Component {
    render() {
        return (
            <Layout>
                <h1>NEW PAGE</h1>
                <form action="/fruits" method="POST">
                    Name: <input type="text" name="name" />
                    <br />
                    Color: <input type="text" name="color" />
                    <br />
                    Is Ready to Eat: <input type="checkbox" name="readyToEat" />
                    <br />
                    <input type="submit" name="" value="Create Fruit" />
                </form>
            </Layout>
        );
    }
}

module.exports = New;
