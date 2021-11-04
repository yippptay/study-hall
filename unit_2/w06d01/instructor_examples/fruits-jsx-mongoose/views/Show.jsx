const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Fruits show page</h1>
                <nav>
                    <a href="/fruits">Back to Home</a>
                </nav>
                The { this.props.fruit.name } is { this.props.fruit.color }
        { this.props.fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </div>
        )
    }
}
module.exports = Show;