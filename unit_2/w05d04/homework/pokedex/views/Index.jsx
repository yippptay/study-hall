const React = require("react");
const Template = require("./Template.jsx");

class Index extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(Pokemon)
    return (
      <Template>
        <h2>
          <a href="/new">Create a Pokemon!</a>
        </h2>
        <h1>Pokedex</h1>
        <div className="pokemon">
          {data.map((monster, index) => {
            return (
              <a href={`/pokemon/${index}`}>
                <div key={index} className="monster">
                  <h2>{monster.id}</h2>
                  <h2>{monster.name}</h2>
                  <img src={monster.img} alt="" />
                  <h2>{monster.type}</h2>
                </div>
              </a>
            );
          })}
        </div>
      </Template>
    );
  }
}
module.exports = Index;