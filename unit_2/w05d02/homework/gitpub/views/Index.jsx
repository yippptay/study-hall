const React = require("react");

const myStyle = {
    textTransform: "capitalize",
    listStyle: "none",
  };

const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}

class Index extends React.Component {
    render() { 
        return(
            <div style={bodyStyle}>
                <h1>Welcome to gitPub</h1>
                <ul style={myStyle}>
                    {this.props.drinks.map((item, index) => {
                        return (
                        <li key={index}><a href={`/drinks/showpage/${index}`}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports  = Index;