const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Captains Log</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" /> <br />
          Ship is broken: <input type="checkbox" name="shipIsBroken" /> <br />
          <textarea rows="4" cols="50" name="entry">
            Enter log here...
          </textarea>
          <input type="submit" name="" value="Enter log" />
        </form>
      </div>
    );
  }
}

module.exports = New;
