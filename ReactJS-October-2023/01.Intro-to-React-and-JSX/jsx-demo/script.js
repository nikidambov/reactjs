import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

//const reactHeadingElement = React.createElement('h1', {}, 'Hello From JSX!');
//const reactSecondHeading = React.createElement('h2', {}, 'Second heading!');
//const header = React.createElement('header', { className: 'site-header' }, reactHeadingElement, reactSecondHeading);

//const Footer = () => {
//    return React.createElement('div', { className: 'site-footer'}, React.createElement('p', {}, 'All right reserved &copy;'));
//}

var Footer = function Footer() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'footer'
        )
    );
};
var headerJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        { className: 'site-header' },
        React.createElement(
            'h1',
            null,
            'Hello from JSX!'
        ),
        React.createElement(
            'h2',
            null,
            'Second heading!'
        ),
        React.createElement(
            'h3',
            null,
            'Third heading!'
        )
    ),
    React.createElement(Footer, null),
    React.createElement(Footer, null),
    React.createElement(Footer, null),
    React.createElement(Footer, null)
);

root.render(headerJSX);