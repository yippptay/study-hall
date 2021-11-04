const React = require('react')

const Layout = (props) => {
    return (
        <>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans:wght@300;700&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="/css/styles.css"/> 
                <title>Budgtr</title>
            </head>
            <body>
                <div className="container">
                    {props.children}
                </div>
            </body>
        </>
    )
}

module.exports = Layout