const React = require("react");
const Template = require("./Template.jsx");

class Edit extends React.Component {
  render() {
    const { monster, id } = this.props;
    console.log(monster);
    return (
      <Template>
        <h1>Pokedex</h1>
        <a href="/pokemon">Home</a>
        <div className="top-container">
          <div className="monster">
            <h2>{monster.id}</h2>
            <h2>{monster.name}</h2>
            <img src={monster.img} alt="" />
            <h2>{monster.type}</h2>
          </div>
          <div className="edit-form">
            <form
              action={`/pokemon/${this.props.id}?_method=PUT`}
              method="post"
            >
              <h3>Name</h3>{" "}
              <input type="text" name="name" value={monster.name} />
              type:{" "}
              <input type="text" name="type" defaultValue={monster.type} />
              hp :{" "}
              <input
                type="number"
                name="hp"
                min="1"
                defaultValue={monster.stats.hp}
              />
              attack :{" "}
              <input
                type="number"
                name="attack"
                min="1"
                defaultValue={monster.stats.attack}
              />
              defense :{" "}
              <input
                type="number"
                name="defense"
                min="1"
                defaultValue={monster.stats.defense}
              />
              spattack :{" "}
              <input
                type="number"
                name="spattack"
                min="1"
                defaultValue={monster.stats.spattack}
              />
              spdefense :{" "}
              <input
                type="number"
                name="spdefense"
                min="1"
                defaultValue={monster.stats.spdefense}
              />
              speed :{" "}
              <input
                type="number"
                name="speed"
                min="1"
                defaultValue={monster.stats.speed}
              />
              <input type="submit" value="update" />
            </form>
          </div>
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
module.exports = Edit;