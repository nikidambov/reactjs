// Get DOM Container
var rootDomElement = document.getElementById("root");

// Create Root
var reactRootElement = ReactDOM.createRoot(rootDomElement);

// Create React Element without JSX
var headingReactElement = React.createElement("h1", {}, "Hello from React!");
var subHeadingReactElement = React.createElement("h2", { id: "sub-header" }, "The Best Framework!");
var headerSectionReactElement = React.createElement("header", {}, headingReactElement, subHeadingReactElement);

// Create React Element with JSX
var headerSectionReactJSXElement = React.createElement(
    "header",
    null,
    React.createElement(
        "h1",
        { className: "main-header" },
        "Hello from JSX!"
    ),
    React.createElement(
        "h2",
        { id: "sub-header" },
        "The best Superset Language!"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga?"
    )
);

// Render Element To UI
reactRootElement.render(headerSectionReactJSXElement);

// Compare React Element VS DOM Element
setTimeout(function () {
    var subHeadingDomElement = document.getElementById("sub-header");
    console.dir(subHeadingDomElement);
    console.dir(subHeadingReactElement);
}, 500);