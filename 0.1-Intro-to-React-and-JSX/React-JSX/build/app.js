var rootElement = document.getElementById("root");
// console.dir(rootElement);
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');

// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);
// console.log(JSON.parse(JSON.stringify(headerElement)));

// Use JSX Syntax

var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "Hello from React!"
        ),
        React.createElement(
            "h2",
            null,
            "Slogan here"
        )
    ),
    React.createElement(
        "button",
        null,
        "click"
    )
);

root.render(headerElement);