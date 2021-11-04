const React = require('react');

class Show extends React.Component {
    render () {
        return (
            <div>
                <h1>This is my super awesome show page</h1>
                <h2>{this.props.fruit.name} is so {this.props.fruit.color}</h2>
                <h2>{this.props.fruit.readyToEat? 'And Its soooo good': 'But its garbage'}</h2>
                <ul>
                {this.props.demo.map((item, index)=>{
                    console.log(item)
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}
module.exports = Show;