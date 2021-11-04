const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        console.log(this.props);
        // const title = this.props.title;
        // const fruits = this.props.fruits;
        const { title, fruits } = this.props;
        const myStyle = { color: 'red', backgroundColor: 'green' };
        return (
            <Layout cheese="gouda">
                <h1 style={myStyle}>{title}</h1>
                <img src="/img/dragon.jpg" />
                <a href="/fruits/new">Add New Fruit</a>
                <div>
                    {fruits.map((fruit, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    The {fruit.name} is {fruit.color}
                                </p>
                                <p>
                                    {fruit.readyToEat
                                        ? 'Its ready to eat'
                                        : 'It is not ready to eat'}
                                </p>
                                <a href={`/fruits/${index}`}>See More</a>
                                <form
                                    action={`/fruits/${index}?_method=DELETE`}
                                    method="POST"
                                >
                                    <input type="submit" value="delete" />
                                </form>
                                <form
                                    action={`/fruits/${index}/edit`}
                                    method="GET"
                                >
                                    <input type="submit" value="edit" />
                                </form>
                            </div>
                        );
                    })}
                </div>
            </Layout>
        );
    }
}

module.exports = Index;
