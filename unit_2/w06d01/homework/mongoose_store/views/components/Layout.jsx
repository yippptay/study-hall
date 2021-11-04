const React = require("react");

const Layout = (props) => {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Grand Exchange</title>
      </head>
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  );
};

module.exports = Layout;
