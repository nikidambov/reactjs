// Get DOM Container
const rootDomElement = document.getElementById("root");

// Create Root
const reactRootElement = ReactDOM.createRoot(rootDomElement);

// Create React Element
const headingReactElement = React.createElement("h1", {}, "Hello from React!");
const subHeadingReactElement = React.createElement("h2", {id: "sub-header"}, "The Best Framework!");
const headerSectionReactElement = React.createElement("header", {}, headingReactElement, subHeadingReactElement);

// Render Element To UI
reactRootElement.render(headerSectionReactElement);

// Compare React Element VS DOM Element
setTimeout(() => {
    const subHeadingDomElement = document.getElementById("sub-header");
    console.dir(subHeadingDomElement);
    console.dir(subHeadingReactElement);
}, 500);