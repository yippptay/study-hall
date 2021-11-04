const React = require("react");

class Edit extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <h1>Edit Log</h1>
        <form action={`/logs/edit/${logs._id}`} id="userform" method="POST">
          Title: <input type="text" name="title" value={logs.title} /> <br />
          Ship is broken:{" "}
          <input
            type="checkbox"
            name="shipIsBroken"
            value={logs.title ? "checked" : ""}
          />
          <br />
          <textarea rows="4" cols="50" name="entry" form="userform">
            {logs.entry}
          </textarea>
          <input type="submit" name="" value="Enter log" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
