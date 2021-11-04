const React = require("react");

class Show extends React.Component {
  render() {
    const logs = this.props.logs;
    return (
      <div>
        <h1>Captians Log</h1>
        <nav>
          <a href="/logs">Back to Home</a>
        </nav>
        <h3>{logs.title}</h3>
        <p>{logs.entry}</p>
        <h5>Ship Broken:{logs.shipIsBroken ? "Not broken" : "Broken"}</h5>
      </div>
    );
  }
}

module.exports = Show;
