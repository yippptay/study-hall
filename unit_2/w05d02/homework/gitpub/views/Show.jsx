const React = require("react")

const myStyle = {
    textTransform: "capitalize",
};

const bodyStyle = {
    margin: "0",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
}

const imgStyle = {
    width: "25%",
    height: "auto",
    borderStyle: "dotted",
}

const font = {
    fontSize: "24px",
    color: "green",
}

class Show extends React.Component {
    render() { 
        return(
            <div style={bodyStyle}>
                <h1 style={myStyle}>{"なまえ: " + this.props.drinks.name}</h1>
                <img style={imgStyle} src={this.props.drinks.image} alt="picture of a beverage"/>
                <h2 style={font}>{"¥" + Math.round(this.props.drinks.price * 107.03)}</h2>
            </div>
        )
    }
}

module.exports  = Show;