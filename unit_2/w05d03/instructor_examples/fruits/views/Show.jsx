const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const fruit = this.props.fruit;
        return (
            <Layout>
                <h1>Show Page</h1>
                <p>
                    {' '}
                    The {fruit.name} is {fruit.color}
                </p>
                <p>
                    {fruit.readyToEat
                        ? 'Its ready to eat'
                        : 'It is not ready to eat'}
                </p>
            </Layout>
        );
    }
}

module.exports = Show;
