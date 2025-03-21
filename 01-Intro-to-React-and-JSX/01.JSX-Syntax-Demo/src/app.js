// Get DOM Container
const rootDomElement = document.getElementById("root");

// Create Root
const reactRootElement = ReactDOM.createRoot(rootDomElement);

// Create React Element without JSX
const headingReactElement = React.createElement("h1", {}, "Hello from React!");
const subHeadingReactElement = React.createElement("h2", {id: "sub-header"}, "The Best Framework!");
const headerSectionReactElement = React.createElement("header", {}, headingReactElement, subHeadingReactElement);

// Create React Element with JSX
const headerSectionReactJSXElement = (
    <header>
        <h1 className="main-header">Hello from JSX!</h1>
        <h2 id="sub-header">The best Superset Language!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga?</p>
    </header>
);

// Render Element To UI
reactRootElement.render(headerSectionReactJSXElement);

// Compare React Element VS DOM Element
setTimeout(() => {
    const subHeadingDomElement = document.getElementById("sub-header");
    console.dir(subHeadingDomElement);
    console.dir(subHeadingReactElement);
}, 500);