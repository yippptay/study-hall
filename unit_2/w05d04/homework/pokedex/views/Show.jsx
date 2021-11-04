const React = require("react");
const Template = require("./Template.jsx");

class Show extends React.Component {
  render() {
    const { monster, id } = this.props;
    return (
      <Template>
        <h1>Pokedex</h1>
        <div className="show-nav">
          <a className="btn btn-primary" href="/pokemon">
            Home
          </a>
          <a className="btn btn-primary" href={`/pokemon/${id}/edit`}>
            Edit
          </a>
          <form action={`/pokemon/${id}?_method=DELETE`} method="post">
            <input className="btn btn-danger" type="submit" value="delete" />
          </form>
        </div>
        <div className="monster">
          <h2>{monster.id}</h2>
          <h2>{monster.name}</h2>
          <img src={monster.img} alt="" />
          <h2>{monster.type}</h2>
        </div>
        <div className="monster-stats">
          <ul>
            {Object.keys(monster.stats).map((key, index) => {
              return <li key={index}>{`${key} : ${monster.stats[key]}`}</li>;
            })}
          </ul>
        </div>
      </Template>
    );
  }
}
module.exports = Show;