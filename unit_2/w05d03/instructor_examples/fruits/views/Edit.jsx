const React = require('react');
const Layout = require('./components/Layout.jsx');
// const Default = require('./Default.jsx')
const { Component } = React;

class Edit extends Component {
    render() {
        const { fruit } = this.props;
        console.log(fruit);

        return (
            <Layout>
                <h1> Edit {this.props.fruit.name}</h1>
                <form
                    action={`/fruits/${this.props.index}?_method=PUT`}
                    method="post"
                >
                    <input type="text" name="name" value={fruit.name} />
                    <input type="text" name="color" value={fruit.color} />
                    <input
                        type="checkbox"
                        name="readyToEat"
                        checked={fruit.readyToEat ? 'checked' : ''}
                    />
                    <input type="submit" value="Update" />
                </form>
            </Layout>
        );
    }
}

module.exports = Edit;
