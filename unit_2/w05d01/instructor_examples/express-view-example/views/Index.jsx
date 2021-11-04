const React = require('react')
const Default = require('./layouts/Default.jsx')
const Jumbotron = require('./components/Jumbotron.jsx')


class Index extends React.Component {
  render(){
      // render
      return (
          <Default title="This is just the beginning">
            {/* this is my super cool comment*/}
            <Jumbotron></Jumbotron>
            <h1>
              Hello World from {this.props.name}
            </h1><br/>
            <h1>
              Hello World from {this.props.name}
            </h1>
            <Jumbotron></Jumbotron>
            <ul>
                <li></li>
            </ul>
          </Default>
          )   
  }
}

module.exports = Index