const React = require("react");

class Index extends React.Component {
  render() {
    const logout = (
      <form action="/sessions/?_method=DELETE" method="post">
        <input type="submit" value="Logout" />
      </form>
    );
    return (
      <div>
        <h1>Captians Logs</h1>
        <nav>
          <a href="/logs/new">Enter new log</a>
        </nav>
        {this.props.username ? logout : ""}
        <ul>
          {this.props.logs.map((logs, index) => {
            return (
              <li>
                <a href={`/logs/${logs._id}`}>{logs.title}</a>
                <form action={`/logs/${logs._id}?_method=DELETE`} method="post">
                  <input type="submit" value="delete" />
                </form>
                <a href={`/logs/edit/${logs._id}`}>Edit {logs.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
