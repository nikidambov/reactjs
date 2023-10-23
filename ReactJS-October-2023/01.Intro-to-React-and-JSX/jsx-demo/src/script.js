import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

//const reactHeadingElement = React.createElement('h1', {}, 'Hello From JSX!');
//const reactSecondHeading = React.createElement('h2', {}, 'Second heading!');
//const header = React.createElement('header', { className: 'site-header' }, reactHeadingElement, reactSecondHeading);

//const Footer = () => {
//    return React.createElement('div', { className: 'site-footer'}, React.createElement('p', {}, 'All right reserved &copy;'));
//}

const Footer = () => (
    <div>
        <h1>footer</h1>
    </div>
);
const headerJSX = (
    <div>
        <header className='site-header'>
            <h1>Hello from JSX!</h1>
            <h2>Second heading!</h2>
            <h3>Third heading!</h3>
        </header>
        <Footer />
        <Footer />
        <Footer />
        <Footer />

    </div>
);

root.render(headerJSX);