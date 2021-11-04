const React = require("react");
const Template = require("./Template.jsx");

class Show extends React.Component {
  render() {
    return (
      <Template>
        <h1>Pokedex</h1>
        <a href="/pokemon">Home</a>
        <div className="form-new">
          <form action="/pokemon" method="POST">
            name: <input value="?" type="text" name="name" />
            type: <input value="colorless" type="text" name="type" />
            hp : <input value="0" type="number" name="hp" min="1" max="120" />
            attack :{" "}
            <input value="0" type="number" name="attack" min="1" max="80" />
            defense :{" "}
            <input value="0" type="number" name="defense" min="1" max="100" />
            spattack :{" "}
            <input value="0" type="number" name="spattack" min="1" max="100" />
            spdefense :{" "}
            <input value="0" type="number" name="spdefense" min="1" max="100" />
            speed :{" "}
            <input value="0" type="number" name="speed" min="1" max="100" />
            <input type="submit" value="Create Pokemon" />
          </form>

          <img
            src="/img/Professor_Oaks_Laboratory.png"
            alt="professor oaks lab"
          />
        </div>
      </Template>
    );
  }
}
module.exports = Show;