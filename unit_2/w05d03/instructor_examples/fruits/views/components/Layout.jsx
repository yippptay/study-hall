const React = require('react');

const Layout = (props) => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="/css/style.css" />
                <title>Fruits</title>
            </head>
            <body>{props.children}</body>
        </>
    );
};

module.exports = Layout;
